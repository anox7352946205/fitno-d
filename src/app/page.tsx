import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsFitnod from "@/components/WhatIsFitnod";
import Programs from "@/components/Programs";
import WhoCanDoIt from "@/components/WhoCanDoIt";
import WhyFitnod from "@/components/WhyFitnod";
import VideoTestimonials from "@/components/VideoTestimonials";
import Transformations from "@/components/Transformations";
import { KnowTheCreator, MasterCoach } from "@/components/CreatorSections";
import Reviews from "@/components/Reviews";
import Subscription from "@/components/Subscription";
import CallbackForm from "@/components/CallbackForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsFitnod />
        <Programs />
        <WhoCanDoIt />
        <WhyFitnod />
        <VideoTestimonials />
        <Transformations />
        <KnowTheCreator />
        <Reviews />
        <MasterCoach />
        <Subscription />
        <CallbackForm />
        <FAQ />
      </main>
      <Footer />
      <LeadPopup />
    </>
  );
}
