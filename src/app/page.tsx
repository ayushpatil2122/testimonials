import HeroSection from "@/components/home/HeroSection"
import MidSection from "@/components/home/MidSection";
import WorkingSection from "@/components/home/Working";
import FeaturesSection from "@/components/home/Feature";
import FAQSection from "@/components/home/FAQ"


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MidSection/>
      <WorkingSection/>
      <FeaturesSection/>
      <FAQSection/>
    </div>
  );
}
