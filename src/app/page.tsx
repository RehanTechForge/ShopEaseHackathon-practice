import SupportSection from "@/components/AboutPage/SupportSection";
import ArrivalSection from "@/components/HomePage/ArrivalSection";
import { CardsCarousel } from "@/components/HomePage/CardsCarousel";
import { CategoryCarousel } from "@/components/HomePage/CategoryCarousel";
import ExploreProduct from "@/components/HomePage/ExploreProduct";
import MusicSection from "@/components/HomePage/MusicSection";
import SellingSection from "@/components/HomePage/SellingSection";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <section className="px-5 sm:px-20">
        <CardsCarousel />
        <CategoryCarousel />
        <SellingSection />
        <MusicSection />
        <ExploreProduct />
        <ArrivalSection />
        <SupportSection />
      </section>
    </>
  );
}
