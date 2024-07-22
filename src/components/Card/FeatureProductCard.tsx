interface FeatureProductCard {
  image: string;
  title: string;
  buttonText: string;
}

function FeatureProductCard({ image, title, buttonText }: FeatureProductCard) {
  return (
    <>
      <div className="relative flex items-center p-2 md:p-4">
        <img
          src={image}
          alt={title}
          className=" rounded-xl sm:w-[233px] sm:h-[127px] md:w-[384px] md:h-[157px] "
        />
        <div className="absolute text-center transform bottom-0 right-0 -translate-x-2 -translate-y-6  sm:-translate-x-32 sm:-translate-y-8  md:-translate-x-6 md:-translate-y-12  flex flex-col">
          <h1 className=" md:text-lg lg:text-2xl font-black text-black mb-2 md:mb-4">{title}</h1>
          <div className="me-4">
            <button className="w-[73px] h-[20px] md:w-[97px] md:h-[27px] mt-2 bg-black font-black text-xs md:text-sm text-white rounded-xl">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProductCard;
