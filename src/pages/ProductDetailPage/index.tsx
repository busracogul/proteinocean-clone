import BestsellersSection from "../HomePage/BestSellersSection";
import ProductComment from "./ProductCommentSection";
import ProductDetailFeature from "./ProductDetailFeature";

function index() {
  return (
    <>
      <ProductDetailFeature />
      <div className="my-24">
        <BestsellersSection title="SON GÖRÜNTÜLENEN ÜRÜNLER" />
      </div>
      <ProductComment />
      <BestsellersSection title="ÇOK SATANLAR" />
    </>
  );
}

export default index;
