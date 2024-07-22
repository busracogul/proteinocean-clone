interface ProductCard {
  name: string;
  image: string;
  description: string;
  numberOfComments: number;
  rating: number;
  price: number;
  discountPrice?: number;
}

function ProductCard({
  name,
  image,
  description,
  numberOfComments,
  rating,
  price,
  discountPrice,
}: ProductCard) {
  return (
    <>
      <div className="relative p-3 text-center">
        {discountPrice && (
          <div className="absolute -top-2 -right-3 w-[60px] h-[50px] bg-[#ED2727] p-2 text-white rounded-bl-lg">
            <div className="w-[42px] h-[20px] font-bold text-sm ">
              %{discountPrice}
            </div>
            <div className="text-xs font-normal w-[42px] h-[12px] ">
              İNDİRİM
            </div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          className="w-[168px] h-[168px] object-cover mb-4"
        />
        <h2 className="text-xl mb-2 h-8">{name}</h2>
        <p className="text-gray-400 mb-2 h-8">{description}</p>
        <div className="mt-4 mb-4">
          <span className="text-yellow-500 ml-2">{rating} ★</span>
        </div>
        <div className=" mb-2">
          <span className="text-gray-600">{numberOfComments} comments</span>
        </div>
        <div className="">
          {discountPrice ? (
            <>
              <span className="text-gray-900 text-lg font-bold">
                {price} TL
              </span>
              <span className="text-red-500 text-sm line-through ml-4">
                {discountPrice} TL
              </span>
            </>
          ) : (
            <span className="text-gray-900 text-lg font-bold">{price} TL</span>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
