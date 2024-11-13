import { useEffect, useState } from "react";
import { productsGet } from "@/api/api";
import ProductCard from "@/components/Card/ProductCard";
import { useLocation } from "react-router-dom";

interface ProductProps {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: number | null;
    total_price: number;
    discounted_price: number | null;
    price_per_servings: number;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}
[];

function index() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const location = useLocation();
  const mainCategoryId = location.state?.mainCategoryId;
  const categoryName = location.state?.categoryName;

  useEffect(() => {
    async function getProduct() {
      try {
        const fetchedCategories = await productsGet(mainCategoryId);
        const fetchedData = fetchedCategories.data;
        setProducts(fetchedData.results);
      } catch (err) {
        console.log(err);
      }
    }

    if (mainCategoryId) {
      getProduct();
    }
  }, [mainCategoryId]);

  return (
    <>
      <h1 className="text-center font-extrabold text-4xl my-4">
        {categoryName}
      </h1>
      <ProductCard
        products={products}
        discountClassName="translate-x-28"
        cardGrid=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container"
      />

      <div className="container mt-8">
        <div className="flex justify-center">
          <p>Toplam {products.length} ürün görüntüleniyor</p>
        </div>
        <div className="my-12">
          <p className="font-normal text-base text-gray-900 mb-2">
            Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini
            sağlayan temel yapı taşlarından biri proteindir.
            <span className="font-bold"> Protein </span> kısaca, bir veya daha
            fazla amino asit artık
          </p>
          <a href="#" className="text-[#059669] underline">
            Daha fazla göster
          </a>
        </div>
      </div>
    </>
  );
}

export default index;
