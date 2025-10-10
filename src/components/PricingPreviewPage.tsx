import CompareFeaturesCTA from "./price/CompareFeaturesCTA";
import FAQSection from "./price/FAQSection";
import PricingSection from "./price/PricingSections";

 const PricingPreviewPage = () => {
  return (
    // This component looks best on a dark, slightly textured background
    <div className="bg-black">
      <PricingSection />
      <CompareFeaturesCTA />
      <FAQSection />
    </div>
  );
};

export default PricingPreviewPage;
