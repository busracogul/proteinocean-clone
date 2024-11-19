import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

interface ProductDetailCardProps {
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
      nutrition_facts: {};
      amino_acid_facts: {};
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

function ProductDetailCard({
  name,
  tags,
  comment_count,
  slug,
  short_explanation,
  explanation,
  average_star,
}: ProductDetailCardProps) {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount((oldCount) => oldCount - 1);
    }
  };

  const increaseCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row mt-4 mx-2 md:mx-0">
        <div className="w-full md:w-1/2">
          {/* <img src={image} className=" w-full h-auto" alt={name} /> */}
        </div>
        <div className="w-full md:w-1/2 ms-0 md:ms-20">
          <h1 className="font-semibold text-3xl leading-9">{name}</h1>
          <p className="font-medium text-sm uppercase leading-6 text-[#636363]">
            {short_explanation}
          </p>
          <div className="">
            <span className="text-yellow-500 mr-2">{average_star}</span>
            <span className="font-semibold text-sm text-[#333333]">
              {comment_count} Yorum
            </span>
          </div>
          <div className="mt-2">
            {tags &&
              tags.map((productT, index) => (
                <span
                  key={index}
                  className="bg-[#F1F1F1] text-xs font-normal rounded-[24px] px-4 py-2 mr-2"
                >
                  {productT}
                </span>
              ))}
          </div>
          <div className="">
            <hr className="mt-5 border-t-[2px] #cac2c2 w-full" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">AROMA:</h3>
            {/* <div className="gap-2 mt-2">
              {aromas.map((aroma, index) => (
                <button
                  key={index}
                  className="border py-1 px-2 pe-12 rounded relative inline-block mr-2 mt-3"
                  style={{
                    border: "3px solid #E5E5E5",
                    backgroundColor: "#F6F7F8",
                  }}
                >
                  {aroma}
                  <span
                    className="absolute right-0 top-0 bottom-0"
                    style={{
                      backgroundColor: aromaColors[aroma],
                      width: "20px",
                    }}
                  ></span>
                </button>
              ))}
            </div> */}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">BOYUT:</h3>
            {/* <div className="gap-2 mt-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`relative border py-5 px-6 rounded mr-2 mt-2`}
                  style={{
                    border: "3px solid #E5E5E5",
                    backgroundColor: "#F6F7F8",
                  }}
                >
                  <div className="text-lg font-bold">{size.label}</div>
                  <div className="text-sm">{size.servings} servis</div>
                  {size.discount && (
                    <div className="absolute top-0 transform translate-x-5 -translate-y-2 bg-red-500 text-white px-2 py-1 font-semibold text-xs">
                      %{size.discount} İNDİRİM
                    </div>
                  )}
                </button>
              ))}
            </div> */}
          </div>
          <div className="mt-8 ">
            {/* <div className="flex justify-between">
              <p className="text-3xl font-bold">{price} TL</p>
              <p className="text-base pt-2 font-semibold text-gray-600">
                {" "}
                {unitPrice} TL /Servis
              </p>
            </div> */}
          </div>

          <div className="my-4 flex items-center justify-between">
            <div
              className="flex items-center justify-center rounded-[4px]"
              style={{
                border: "3px solid #E5E5E5",
              }}
            >
              <button
                onClick={decreaseCount}
                className="w-[30px] h-[54px] bg-[#F7F7F7] font-semibold text-2xl"
              >
                -
              </button>
              <span className="w-[60px] h-[54px]  font-normal text-xl flex items-center justify-center">
                {count}
              </span>
              <button
                onClick={increaseCount}
                className="w-[30px] h-[54px] bg-[#F7F7F7] font-semibold text-2xl"
              >
                +
              </button>
            </div>

            <div className="ms-4">
              {/*   <button className="flex items-center justify-center rounded-[4px] font-semibold text-xl w-[350px] h-[55px] bg-black text-white">
                <img
                  src="src/assets/ProductDetailPage/svg/sepet.svg"
                  className="pe-4"
                  alt=""
                />
                SEPETE EKLE
              </button> */}
              <Button
                variant="secondary"
                type="submit"
                className="lg:px-28 px-6 py-7 bg-black"
              >
                <img
                  src="src/assets/HomePage/image/sepet.svg"
                  className="pr-2"
                  alt=""
                />
                SEPETE EKLE
              </Button>
            </div>
          </div>

          <div className="text-center mt-4 grid grid-cols-3 ">
            <div className="flex text-center">
              <img
                src="src/assets/ProductDetailPage/svg/kargo.svg"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <p className="ps-1 md:ps-3 text-xs font-normal leading-5 ">
                Aynı Gün <br />
                Ücretsiz Kargo
              </p>
            </div>
            <div className="flex">
              <img
                src="src/assets/ProductDetailPage/svg/tick.svg"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <p className="ps-1 md:ps-3 text-center text-xs font-normal leading-5 ">
                750.000+
                <br />
                Mutlu Müşteri
              </p>
            </div>
            <div className="flex">
              <img
                className="w-[40px] h-[40px]"
                src="src/assets/ProductDetailPage/svg/memnuniyet.svg"
                alt=""
              />
              <p className="ps-1 md:ps-3 text-center text-xs font-normal leading-5">
                Memnuniyet <br />
                Garantisi
              </p>
            </div>
          </div>
          <div className="flex-col">
            <div className="">
              <hr className="mt-7 border-t-[2px] #cac2c2 w-full" />
            </div>
            {/* <p className="mt-5 text-xs leading-4 font-medium text-gray-600">
              Son Kullanma Tarihi: {expiryDate}
            </p> */}
            {/* <div>
              {features.map((feature, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{feature.title}</AccordionTrigger>
                    <AccordionContent>{feature.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
