import AboutUsSection from "@/components/sections/home/AboutUs";
import Banner from "@/components/sections/home/Banner";
import ServicesSection from "@/components/sections/home/Ourservice";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUsSection />
      <ServicesSection />
    </div>
  );
}
