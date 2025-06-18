
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryNav />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
