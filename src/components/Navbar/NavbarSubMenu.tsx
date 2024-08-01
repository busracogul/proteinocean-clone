function NavbarSubMenu() {
  return (
    <>
      <div className="container py-3 grid-cols-3 hidden sm:grid">
        <div className="flex">
          <img src="src/assets/HomePage/image/packet.svg" alt="" />
          <span className="font-bold text-xs ps-2">AYNI GÜN KARGO</span>
          <span className="font-normal text-xs">
             - 16:00’DAN ÖNCEKİ SİPARİŞLERDE
          </span>
        </div>
        <div className="flex">
          <img src="src/assets/HomePage/image/smile.svg" alt="" />
          <span className="font-bold text-xs ps-2">ÜCRETSİZ KARGO </span>
          <span className="font-normal text-xs">
             - 100 TL ÜZERİ SİPARİŞLERDE
          </span>
        </div>
        <div className="flex">
          <img src="src/assets/HomePage/image/security.svg" alt="" />
          <span className="font-bold text-xs ps-2">GÜVENLİ ALIŞVERİŞ</span>
          <span className="font-normal text-xs">
             - 1.000.000+ MUTLU MÜŞTERİ
          </span>
        </div>
      </div>
    </>
  );
}

export default NavbarSubMenu;
