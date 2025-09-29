import React from react;
import HeroSection from ../components/home/HeroSection;
import FeaturedCollections from ../components/home/FeaturedCollections;
import PopularItems from ../components/home/PopularItems;
import BrandShowcase from ../components/home/BrandShowcase;

export default function Home() {
  return (
    <div className=min-h-screen>
      <HeroSection />
      <FeaturedCollections />
      <PopularItems />
      <BrandShowcase />
    </div>
  );
}
