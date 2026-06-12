'use client';



// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MainAchievements from '@/components/Stats';
import HomeAboutTimeline from '@/components/About';
import Services from '@/components/Services';
import IndustriesSection from '@/components/Industry';
import Whychoose from '@/components/Whychoose';
import MainVisionSection from '@/components/Values';
import ContactSection from '@/components/ContactSection';
import FloatingMenuButton from '@/components/FloatingMenuButton';
import ScrollToTop from '@/components/ScrollToTop';
import LoadingScreen from '@/components/LoadingSreen';
import OneFirm from '@/components/OneFirm';
import MotoSwiper from '@/components/MottoSwiper';
import Dashboard from '@/components/Dashboard';
import OurProcess from '@/components/OurProcess';
import Call from '@/components/Call';
import Testimonials from '@/components/Testimonials';
import ServicesPopup from '@/components/ServicesPopup';
import Faq from '@/components/Faq';

const BookerAccountingWebsite = () => {


  return (

    <div className="min-h-screen text-foreground">
      <Navbar />
      <LoadingScreen />
      <HeroSection />
      <MainAchievements />
      <HomeAboutTimeline />
      <MainVisionSection />

      <Services />
      <MotoSwiper />
      <IndustriesSection />
      {/* <ServicesPopup/> */}
      <OurProcess />
      <Testimonials />
      <Call />
      {/* <Dashboard/> */}
      {/* <Whychoose /> */}
      <OneFirm />
      <Faq />
      <ContactSection />
      <ScrollToTop />
      <FloatingMenuButton />
      <Footer />
    </div>
  );
};

export default BookerAccountingWebsite;
