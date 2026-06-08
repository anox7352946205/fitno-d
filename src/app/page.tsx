import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import VideoTestimonials from "@/components/VideoTestimonials";
import Transformations from "@/components/Transformations";
import Reviews from "@/components/Reviews";
import ConsultationCTA from "@/components/ConsultationCTA";
import AppShowcase from "@/components/AppShowcase";
import Vault from "@/components/Vault";
import Subscription from "@/components/Subscription";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <VideoTestimonials />
        <Transformations />
        <Reviews />
        <ConsultationCTA />
        <AppShowcase />
        <Vault />
        <Subscription />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
