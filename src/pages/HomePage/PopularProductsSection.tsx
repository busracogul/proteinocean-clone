import FeatureProductCard from "@/components/Card/FeatureProductCard";

function PopularProductsSection() {
  const products = [
    {
      image: "src/assets/HomePage/image/protein.jpg",
      title: "PROTEİN",
      buttonText: "İNCELE",
    },
    {
      image: "src/assets/HomePage/image/vitaminler.jpg",
      title: "VİTAMİNLER",
      buttonText: "İNCELE",
    },
    {
      image: "src/assets/HomePage/image/saglik.jpg",
      title: "SAĞLIK",
      buttonText: "İNCELE",
    },
    {
      image: "src/assets/HomePage/image/spor.jpg",
      title: "SPOR",
      buttonText: "İNCELE",
    },
    {
      image: "src/assets/HomePage/image/gida.jpg",
      title: "GIDA",
      buttonText: "İNCELE",
    },
    {
      image: "src/assets/HomePage/image/tum-urunler.jpg",
      title: "TÜM ÜRÜNLER",
      buttonText: "İNCELE",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3">
          {products.map((product, index) => (
            <FeatureProductCard
              key={index}
              image={product.image}
              title={product.title}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularProductsSection;
