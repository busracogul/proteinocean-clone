import ProductDetailCard from "@/components/Card/ProductDetailCard";
import { useParams } from "react-router-dom";

interface Size {
  label: string;
  servings: number;
  isSelected: boolean;
  discount: number | null;
}
interface ProductFeature {
  title: string;
  description: string;
}

interface Product {
  name: string;
  image: string;
  description: string;
  comment: number;
  productType: string[];
  price: number;
  unitPrice: number;
  expiryDate: string;
  aromas: string[];
  sizes: Size[];
  features: ProductFeature[];
}

const products: Product[] = [
  {
    name: "WheyProtein",
    image: "src/assets/HomePage/image/1.jpg",
    description: "Yüksek kaliteli protein",
    comment: 10339,
    productType: ["VEJETARYEN", "GLUTENSİZ"],
    price: 549,
    unitPrice: 34.31,
    expiryDate: "07.2025",
    aromas: [
      "Bisküvi",
      "Çikolata",
      "Muz",
      "Salted Caramel",
      "Choco Nut",
      "Hindistan Cevizi",
      "Raspberry Cheesecake",
      "Çilek",
    ],
    sizes: [
      { label: "400G", servings: 16, isSelected: true, discount: null },
      { label: "1.6KG", servings: 64, isSelected: false, discount: null },
      {
        label: "1.6KG X 2 ADET",
        servings: 128,
        isSelected: false,
        discount: 6,
      },
    ],
    features: [
      {
        title: "ÖZELLİKLER",
        description: "özellikler açıklama",
      },
      {
        title: "BESİN İÇERİĞİ",
        description: "besin içeriği açıklama.",
      },
      {
        title: "KULLANIM ŞEKLİ",
        description: "kullanım şekli açıklama",
      },
    ],
  },
  // Diğer ürünler
];

const aromaColors: { [key: string]: string } = {
  Bisküvi: "#E6BC79",
  Çikolata: "#56321D",
  Muz: "#F1D018",
  "Salted Caramel": "#d2691e",
  "Choco Nut": "#7B3F00",
  "Hindistan Cevizi": "#BA9051",
  "Raspberry Cheesecake": "#CC1E5F",
  Çilek: "#D61F33",
};

function Index() {
  const { productName } = useParams<{ productName: string }>();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <>
      <ProductDetailCard
        name={product.name}
        image={product.image}
        description={product.description}
        comment={product.comment}
        productType={product.productType}
        price={product.price}
        unitPrice={product.unitPrice}
        expiryDate={product.expiryDate}
        aromas={product.aromas}
        sizes={product.sizes}
        aromaColors={aromaColors}
        features={product.features}
      />
    </>
  );
}

export default Index;
