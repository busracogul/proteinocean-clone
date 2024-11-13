import instance from "@/api/api";

interface ProductProps {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: number | null;
    total_price: number;
    discounted_price?: number | null;
    price_per_servings: number;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}
[];

interface ProductCardProps {
  products: ProductProps[];
  discountClassName?: string;
  cardGrid?: string;
}

function ProductCard({
  products,
  discountClassName,
  cardGrid,
}: ProductCardProps) {
  return (
    <div className="md:container md:mx-auto flex justify-center">
      <div
        className={`${
          cardGrid || "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        }`}
      >
        {products.map((product, index) => (
          <div key={index} className="relative sm:w-48 mt-4 text-center">
            {product.price_info.discount_percentage && (
              <div
                className={`absolute ${
                  discountClassName || "-translate-y-5 translate-x-32"
                } w-[60px] h-[50px] bg-[#ED2727] p-2 text-white rounded-bl-lg`}
              >
                <div className="w-[42px] h-[20px] font-bold text-sm">
                  %{product.price_info.discount_percentage}
                </div>
                <div className="text-xs font-normal w-[42px] h-[12px]">
                  İNDİRİM
                </div>
              </div>
            )}
            <img
              src={`${instance.defaults.baseURL}${product.photo_src}`}
              alt={product.name}
              className="w-[168px] h-[168px] object-cover mb-2"
            />

            <h2 className="text-xl mb-1">{product.name}</h2>
            <p className="uppercase font-medium text-xs leading-4 text-gray-400">
              {product.short_explanation}
            </p>
            {product.average_star ? (
              <div className="mt-3 mb-4">
                <span className="flex ml-2 w-36">
                  <img src={product.average_star.toString()} />
                </span>
              </div>
            ) : null}
            <div className="mb-2">
              <span className="text-gray-600">
                {product.comment_count
                  ? `${product.comment_count} yorum`
                  : null}
              </span>
            </div>
            <div>
              {product.price_info.discounted_price ? (
                <>
                  <span className="text-gray-900 text-lg font-bold">
                    {product.price_info.discounted_price} TL
                  </span>
                  <span className="text-red-500 font-bold text-base line-through ml-2">
                    {product.price_info.total_price} TL
                  </span>
                </>
              ) : (
                <span className="text-gray-900 text-xl leading-8 font-medium">
                  {product.price_info.total_price} TL
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
