import Hero from '@/sections/Hero';
import InfoBar from '@/sections/InfoBar';
import About from '@/sections/About';
import ProgramsPreview from '@/sections/ProgramsPreview';
import Equipment from '@/sections/Equipment';
import Amenities from '@/sections/Amenities';
import TrainersPreview from '@/sections/TrainersPreview';
import GalleryPreview from '@/sections/GalleryPreview';
import MembershipPreview from '@/sections/MembershipPreview';
import Testimonials from '@/sections/Testimonials';
import Offers from '@/sections/Offers';
import Location from '@/sections/Location';
import FAQSection from '@/sections/FAQSection';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <About />
      <ProgramsPreview />
      <Equipment />
      <Amenities />
      <TrainersPreview />
      <GalleryPreview />
      <MembershipPreview />
      <Testimonials />
      <Offers />
      <Location />
      <FAQSection />
      <CTASection />
    </>
  );
}
