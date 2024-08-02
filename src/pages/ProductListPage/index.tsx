import BestsellersSection from "../HomePage/BestSellersSection";

function index() {
  return (
    <>
      <BestsellersSection
        title="PROTEIN"
        discountClass="right-3"
        gridClass="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'"
      />
      <div className="container mt-8">
        <div className="flex justify-center">
          <p>Toplam 6 ürün görüntüleniyor</p>
        </div>
        <div className="my-12">
          <p className="font-normal text-base text-gray-900 mb-2">
            Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini
            sağlayan temel yapı taşlarından biri proteindir.
            <span className="font-bold"> Protein </span> kısaca, bir veya daha
            fazla amino asit artık
          </p>
          <a href="#" className="text-[#059669] underline">
            Daha fazla göster
          </a>
        </div>
      </div>
    </>
  );
}

export default index;
