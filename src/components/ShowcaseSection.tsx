interface ShowcaseProps {
  imageSrc: string;
  imageLogo?: string;
}

function ShowcaseSection({ imageSrc, imageLogo }: ShowcaseProps) {
  return (
    <div className="relative text-center">
      <img src={imageSrc} alt="Main Image" className="w-full h-auto sm:h-80 md:h-auto object-cover md:object-contain" />
      {imageLogo && (
        <div className="container">
          <img
            src={imageLogo}
            alt="Logo"
            className="w-[360px] h-[82px] absolute flex justify-center items-center transform -translate-y-60 "
          />
        </div>
      )}
    </div>
  );
}

export default ShowcaseSection;
