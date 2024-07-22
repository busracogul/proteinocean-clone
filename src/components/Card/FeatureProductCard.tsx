interface FeatureProductCard {
  image: string;
  title: string;
  buttonText: string;
}

function FeatureProductCard({ image, title, buttonText }: FeatureProductCard) {
  return (
    <>
      <div className="relative flex items-center p-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-[384px] h-[157px]"
        />
        <div className="absolute text-center transform bottom-0 right-0 -translate-x-4 -translate-y-8 flex flex-col">
          <h1 className="text-2xl font-black text-black mb-4">{title}</h1>
         <div className="me-4">
         <button className="w-[160px] h-[34px] mt-2 bg-black font-black text-sm text-white rounded-xl">
            {buttonText}
          </button>
         </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProductCard;
