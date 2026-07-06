import SmoothScroll from "@/components/SmoothScroll";
import ApplyProvider from "@/components/ApplyProvider";
import Starfield from "@/components/Starfield";
import Hud from "@/components/Hud";
import Hero from "@/components/Hero";
import PlanetSection from "@/components/PlanetSection";
import Products from "@/components/Products";
import Network from "@/components/Network";
import Footer from "@/components/Footer";
import { planets } from "@/lib/planets";

export default function Page() {
  return (
    <SmoothScroll>
      <ApplyProvider>
        <Starfield />
        <Hud />
        <div className="grain" aria-hidden="true" />
        <main>
          <Hero />
          {planets.map((planet, index) => (
            <PlanetSection key={planet.id} planet={planet} index={index} />
          ))}
          <Products />
          <Network />
        </main>
        <Footer />
      </ApplyProvider>
    </SmoothScroll>
  );
}
