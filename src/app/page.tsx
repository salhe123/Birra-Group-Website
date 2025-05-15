import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import CoffeeHero from "@/components/Description/Description";
import StoreProvider from "./StoreProvider";
import ProductsShowcase from "@/components/Products/ProductsShowcase";
import Companies from "@/components/Companies/Companies";
import Process from "@/components/Process/Process";
import FAQ from "@/components/Faq/Faq";
import Blogs from "@/components/Blog/Blogs";
import HeroImage from "@/components/Hero/HeroImage";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <StoreProvider>
        <HeroImage />
        <Services index={3} />
      </StoreProvider>
      {/* <ImageSlider slides={slides} /> */}
      <CoffeeHero />
      <StoreProvider>
        <ProductsShowcase />
        <Companies />
        <Process />
        <About />
        <FAQ />
        <Blogs index={3} title="Explore Our Recent Blog Articles" />
        <Contact />
      </StoreProvider>
    </div>
  );
}
