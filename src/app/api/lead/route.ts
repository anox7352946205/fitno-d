import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const appsScriptUrl = process.env.APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      console.warn(
        'Warning: APPS_SCRIPT_URL environment variable is not defined. Lead logged locally (silent success fallback):',
        { name, email, phone }
      );
      return NextResponse.json({ status: 'success' });
    }

    // Forward the request to Google Apps Script Web App
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to forward to Google Sheets Apps Script');
    }

    return NextResponse.json({ status: 'success' });
  } catch (error: any) {
    console.error('Error submitting lead to Google Sheets:', error);
    return NextResponse.json(
      { status: 'error', message: error.message || 'Failed to submit lead data' },
      { status: 500 }
    );
  }
}
