import { fetchListBestSellers } from "@/api/api";
import ProductCard from "@/components/Card/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BestsellersSectionProps {
  title: string;
  discountClass?: string;
  gridClass?: string;
}

interface ProductProps {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: number;
    total_price: number;
    discounted_price?: number;
    price_per_servings: number;
    discount_percentage: number;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}

const BestsellersSection = ({
  title,
  discountClass,
  gridClass,
}: BestsellersSectionProps) => {
  const [bestSellers, setBestSellers] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getListBestSellers() {
      try {
        const fetchedListBestSellers = await fetchListBestSellers();
        const fetchedData = fetchedListBestSellers.data;
        setBestSellers(fetchedData);
      } catch (err) {
        console.log(err);
      }
    }

    getListBestSellers();
  }, []);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold leading-8 mb-4 flex justify-center">
        {title}
      </h2>
      <div
        className={`grid ${
          gridClass
            ? gridClass
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        }`}
      >
        {bestSellers.map((product, index) => (
          <Link
            to={`/product/${product.slug}`}
            key={index}
            state={{
              productSlug: product.slug,
            }}
          >
            <ProductCard
              products={[product]}
              title={product.name}
              discountClassName={discountClass}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;
