import { productDetail } from "@/api/api";
import ProductDetailCard from "@/components/Card/ProductDetailCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ProductDetailProps {
  id?: string;
  name: string;
  slug?: string;
  short_explanation?: string;
  explanation?: {
    usage: string;
    features: string;
    description: string;
    nutritional_content: {
      ingredients: {
        aroma: string;
        value: string;
      }[];
      nutrition_facts: {
        ingredients: {
          name: string;
          amounts: string[];
        }[];
        portion_sizes: string[];
      };
      amino_acid_facts: {
        ingredients: {
          name: string;
          amounts: string[];
        }[];
        portion_sizes: string[];
      };
    };
  };
  main_category_id?: string;
  sub_category_id?: string;
  tags?: string[];
  variants?: {
    id: string;
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    price: {};
    photo_src: string;
    is_available: boolean;
  }[];
  comment_count?: number;
  average_star?: number;
}
[];

function Index() {
  const [productsDetailPage, setproductsDetail] =
    useState<ProductDetailProps | null>(null);

  const location = useLocation();
  const productSlug = location.state?.productSlug;

  useEffect(() => {
    async function getProductDetail() {
      try {
        const fetchedCategories = await productDetail(productSlug);
        const fetchedData = fetchedCategories.data;
        setproductsDetail(fetchedData);
      } catch (err) {
        console.log(err);
      }
    }

    getProductDetail();
  }, [productSlug]);

  return (
    <>
      {productsDetailPage ? (
        <ProductDetailCard
          name={productsDetailPage.name}
          tags={productsDetailPage.tags}
          variants={productsDetailPage.variants}
          comment_count={productsDetailPage.comment_count}
          slug={productsDetailPage.slug}
          short_explanation={productsDetailPage.short_explanation}
          explanation={productsDetailPage.explanation}
          average_star={productsDetailPage.average_star}
        />
      ) : (
        <div>Ürün bulunamadı</div>
      )}
    </>
  );
}

export default Index;
