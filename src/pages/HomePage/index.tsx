import PopularProductsSection from "./PopularProductsSection";
import BestSellersSection from "./BestSellersSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import CustomerCommentSliderSection from "./CustomerCommentSliderSection";

function index() {
  return (
    <>
      <>
        <ShowcaseSection
          imageSrc={"src/assets/HomePage/image/home-slider-banner1.jpg"}
        />
        <PopularProductsSection />
        <BestSellersSection title="ÇOK SATANLAR" />
        <ShowcaseSection
          imageSrc={"src/assets/HomePage/image/home-slider-banner2.jpg"}
          imageLogo={"src/assets/HomePage/image/LOGO_Beyaz.svg"}
        />
        <CustomerCommentSliderSection/>
      </>
    </>
  );
}

export default index;
