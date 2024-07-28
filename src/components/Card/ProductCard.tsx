interface ProductProps {
  name: string;
  image: string;
  description: string;
  numberOfComments: number;
  rating: number;
  price: number;
  discountPrice?: number;
}

interface ProductCardProps {
  title: string;
  products: ProductProps[];
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative sm:w-48 p-3 text-center">
            {product.discountPrice && (
              <div className="absolute -top-2 -right-2 sm:-top-2 sm:-right-3 w-[60px] h-[50px] bg-[#ED2727] p-2 text-white rounded-bl-lg">
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
              className="w-[168px] h-[168px] object-cover mb-4"
            />
            <h2 className="text-xl mb-2 h-8">{product.name}</h2>
            <p className="text-gray-400 mb-2 h-8">{product.description}</p>
            <div className="mt-4 mb-4">
              <span className="text-yellow-500 ml-2">{product.rating} ★</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-600">
                {product.numberOfComments} comments
              </span>
            </div>
            <div>
              {product.discountPrice ? (
                <>
                  <span className="text-gray-900 text-lg font-bold">
                    {product.price} TL
                  </span>
                  <span className="text-red-500 text-sm line-through ml-4">
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
