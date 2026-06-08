import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import CtaFooter from "@/components/CtaFooter";

export default function Index() {
  return (
    <div className="min-h-screen gradient-mesh noise-overlay relative">
      <Navbar />
      <Hero />
      <Catalog />
      <CtaFooter />
    </div>
  );
}
