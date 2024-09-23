interface ProductProps {
  name: string;
  image: string;
  description: string;
  numberOfComments: number;
  rating?: number;
  price: number;
  discountPrice?: number;
}

interface ProductCardProps {
  title: string;
  products: ProductProps[];
  discountClassName?: string;
}

function ProductCard({ products, discountClassName }: ProductCardProps) {
  return (
    <div className="md:container md:mx-auto flex justify-center">
      <div className="flex grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative sm:w-48 mt-4 text-center ">
            {product.discountPrice && (
              <div
                className={`absolute  ${
                  discountClassName
                    ? discountClassName
                    : " -translate-y-5 translate-x-32  "
                } w-[60px] h-[50px] bg-[#ED2727] p-2 text-white rounded-bl-lg`}
              >
                <div className="w-[42px] h-[20px] font-bold text-sm">
                  %{product.discountPrice}
                </div>
                <div className="text-xs font-normal w-[42px] h-[12px]">
                  İNDİRİM
                </div>
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-[168px] h-[168px] object-contain mb-2"
            />
            <h2 className="text-xl h-8">{product.name}</h2>
            <p className="uppercase font-medium text-xs leading-4 text-gray-400 mb-2 h-5">{product.description}</p>
            <div className="mt-3 mb-4">
              <span className="flex ml-2 w-36">
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600">
                {product.numberOfComments} yorum
              </span>
            </div>
            <div>
              {product.discountPrice ? (
                <>
                  <span className="text-gray-900 text-lg font-bold">
                    {product.price} TL
                  </span>
                  <span className="text-red-500 text-sm line-through ml-2">
                    {product.discountPrice} TL
                  </span>
                </>
              ) : (
                <span className="text-gray-900 text-lg font-bold">
                  {product.price} TL
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
