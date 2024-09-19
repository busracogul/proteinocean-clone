import ProductCard from "@/components/Card/ProductCard";
import { Link } from "react-router-dom";

interface titleProps {
  title: string;
  discountClass?: string;
  gridClass?: string;
}
const BestsellersSection = ({
  title,
  discountClass,
  gridClass,
}: titleProps) => {
  const products = [
    {
      name: "WheyProtein",
      image: "src/assets/HomePage/image/1.jpg",
      description: "Yüksek kaliteli protein.",
      numberOfComments: 120,
      rating: 4.5,
      price: 29.99,
    },
    {
      name: "Vitamin",
      image: "src/assets/HomePage/image/2.jpg",
      description: "Günlük vitamin ihtiyacı.",
      numberOfComments: 80,
      rating: 4.2,
      price: 19.99,
      discountPrice: 29,
    },
    {
      name: "Sağlık",
      image: "src/assets/HomePage/image/3.jpg",
      description: "Sağlığınız için gerekli takviyeler.",
      numberOfComments: 150,
      rating: 4.7,
      price: 39.99,
      discountPrice: 23,
    },
    {
      name: "Spor",
      image: "src/assets/HomePage/image/4.jpg",
      description: "Spor için gerekli ürünler.",
      numberOfComments: 200,
      rating: 4.8,
      price: 49.99,
    },
    {
      name: "Gıda",
      image: "src/assets/HomePage/image/5.jpg",
      description: "Sağlıklı gıda ürünleri.",
      numberOfComments: 110,
      rating: 4.3,
      price: 9.99,
    },
    {
      name: "Tüm Ürünler",
      image: "src/assets/HomePage/image/6.jpg",
      description: "Tüm ürünlerimizi keşfedin.",
      numberOfComments: 50,
      rating: 4.0,
      price: 59.99,
    },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-xl font-semibold leading-8 mb-4 flex justify-center">
        {title}
      </h2>
      <div
        className={`grid ${
          gridClass
            ? gridClass
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        }`}
      >
        {products.map((product, index) => (
          <Link to={`/${product.name}`} key={index}>
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
