function FooterText() {
  return (
    <>
      <div className="container py-8 text-white">
        <div className="flex font-light text-sm">
        <div className="">
              <span className="flex">
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
                <img src="src/assets/HomePage/image/star.svg" alt="" />
              </span>
            </div>
            <span className="ms-2 flex items-center font-light text-sm leading-5">(140.000+)</span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 me-0 md:me-24">
          <p className="text-3xl font-medium mt-4 leading-10 py-4 md:py-0">
            LABORATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET
            GARANTİSİ
          </p>
          <p className="font-light leading-9 pt-4">
            200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
            seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan,
            bizimle iletişime geçtiğinde çözüme kavuşturacağız.
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterText;
