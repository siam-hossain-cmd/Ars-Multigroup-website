import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesSection from '../components/home/IndustriesSection';
import Testimonials from '../components/home/Testimonials';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  useEffect(() => {
    document.title = 'ARS Multigroup – Professional Cleaning & Manpower Services Malaysia';
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
