import FeatureProductCard from "@/components/Card/FeatureProductCard";
import { useEffect, useState } from "react";
import { categoriesSection } from "@/api/api";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: string;
  name: string;
  slug?: string;
  order?: number;
  children?: {
    id: string;
    name: string;
    slug: string;
    order: number;
    sub_children: {
      name: string;
      slug: string;
      order: number;
    }[];
  }[];
  top_sellers?: {
    name: string;
    slug: string;
    description: string;
    picture_src: string;
  }[];
}
[];

function PopularProductsSection() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const fetchedCategories = await categoriesSection();
        const fetchedData = fetchedCategories.data;
        setCategories(fetchedData);
      } catch (err) {
        console.log(err);
      }
    }

    getCategories();
  }, []);

  return (
    <>
      <div className="mx-1 md:container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8">
          {categories.map((category, id) => (
            <Link to={`${category.slug}`} key={id}>
              <FeatureProductCard
                name={category.name}
                image={category.top_sellers?.[0]?.picture_src || ""}
                buttonText="İNCELE"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularProductsSection;
