'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'What is FitNoD?',
    answer:
      "FitNoD stands for Fitness In The Name Of Dance. It's not a dance academy — it's a fitness movement that uses dance as the medium for exercise. Our programs focus on fat loss, active lifestyle, and sustainable fitness through fun, dance-based workouts.",
  },
  {
    question: 'Who can join FitNoD?',
    answer:
      "Everyone! FitNoD is designed for all age groups — from young adults to seniors. Whether you're a working professional, homemaker, or retired, our programs cater to every fitness level and age group.",
  },
  {
    question: 'Do I need any dance experience?',
    answer:
      'Absolutely not! FitNoD is about fitness, not professional dance. Our routines are simple, fun, and easy to follow. If you can move, you can do FitNoD!',
  },
  {
    question: 'Can seniors participate?',
    answer:
      'Yes! We have dedicated programs like our Warm Up series that are low-impact and joint-friendly, specifically designed for seniors. Many of our most active members are 55+.',
  },
  {
    question: 'Can beginners join?',
    answer:
      'Of course! Most of our members started as complete beginners. Our programs are progressive — you start with basics and gradually build up intensity at your own pace.',
  },
  {
    question: 'How does the subscription work?',
    answer:
      "Our annual membership at ₹999/year gives you unlimited access to all workout programs, dance styles, future content, community features, and live masterclasses. That's less than ₹83 per month!",
  },
  {
    question: 'What equipment is needed?',
    answer:
      'None! All you need is some space to move, comfortable clothing, and a device to stream the workouts. No special equipment, no gym membership required.',
  },
  {
    question: 'How do I access the app?',
    answer:
      'Download the FitNoD app from the Google Play Store or Apple App Store. Sign up, choose your membership, and start your dance fitness journey immediately!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-accent-bg section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about FitNoD.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-5 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <span className="font-outfit font-semibold text-lg text-text pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-2xl text-text-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <p className="py-4 text-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
