interface ShowcaseProps {
  imageSrc: string;
  imageLogo?: string;
}

function ShowcaseSection({ imageSrc, imageLogo }: ShowcaseProps) {
  return (
    <div className="relative text-center">
      <img src={imageSrc} alt="Main Image" className="w-full h-96 lg:h-full object-cover" />
      {imageLogo && (
        <div className="container">
          <img
            src={imageLogo}
            alt="Logo"
            className="w-[360px] h-[82px] absolute flex justify-center items-center transform -translate-y-52"
          />
        </div>
      )}
    </div>
  );
}

export default ShowcaseSection;
