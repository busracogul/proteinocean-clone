import NavbarSearch from "./NavbarSearch";
import NavbarLinks from "./NavbarLinks";
import NavbarSubMenu from "./NavbarSubMenu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function index() {
  return (
    <>
      <nav>
        <div className="hidden md:inline">
          <NavbarSearch />
          <NavbarLinks />
          <NavbarSubMenu />
        </div>

        <div className="md:hidden">
          <div className="my-3 flex justify-between">
            <Sheet>
              <SheetTrigger>
                <Button type="submit" className="px-6">
                  <img
                    src="src/assets/HomePage/image/menu-hamburger.svg"
                    className="w-[24px] h-[24px]"
                    alt=""
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"} hideCloseButton={false}>
                <SheetHeader className="h-full">
                  <ul className="list-none px-5 mt-10">
                    <li className="flex justify-between items-center my-2 font-semibold text-base leading-10 cursor-pointer">
                      PROTEİN
                      <img
                        src="src/assets/HomePage/image/right-caret.svg"
                        alt=""
                      />
                    </li>
                    <li className="flex justify-between items-center my-2  font-semibold text-base leading-10 cursor-pointer">
                      SPOR GIDALARI
                      <img
                        src="src/assets/HomePage/image/right-caret.svg"
                        alt=""
                      />
                    </li>
                    <li className="flex justify-between items-center my-2  font-semibold text-base leading-10 cursor-pointer">
                      SAĞLIK
                      <img
                        src="src/assets/HomePage/image/right-caret.svg"
                        alt=""
                      />
                    </li>
                    <li className="flex justify-between items-center my-2  font-semibold text-base leading-10 cursor-pointer">
                      GIDA
                      <img
                        src="src/assets/HomePage/image/right-caret.svg"
                        alt=""
                      />
                    </li>
                    <li className="flex justify-between items-center my-2  font-semibold text-base leading-10 cursor-pointer">
                      VİTAMİN
                      <img
                        src="src/assets/HomePage/image/right-caret.svg"
                        alt=""
                      />
                    </li>
                    <li className="flex justify-between items-center my-2 font-semibold text-base leading-10 cursor-pointer">
                      TÜM ÜRÜNLER
                    </li>
                  </ul>
                  <ul className="list-none px-5 bg-[#E5E5E5] h-full">
                    <li className="flex justify-between items-center my-2 font-medium text-sm leading-8 cursor-pointer">
                      HESABIM
                    </li>
                    <li className="flex justify-between items-center my-2 font-medium text-sm leading-8 cursor-pointer">
                      MÜŞTERİ YORUMLARI
                    </li>
                    <li className="flex justify-between items-center my-2 font-medium text-sm leading-8 cursor-pointer">
                      İLETİŞİM
                    </li>
                  </ul>
                </SheetHeader>
                <SheetClose className="hidden-close-btn" />
              </SheetContent>
            </Sheet>

            <div className="flex">
              <img src="src/assets/HomePage/image/LOGO_Siyah.svg" alt="" />
            </div>

            <img
              src="src/assets/HomePage/image/sepet.svg"
              className="pr-2 text-black"
              alt=""
              style={{ filter: "invert(1) brightness(0) saturate(100%)" }}
            />
          </div>

          <div className="relative flex items-center mb-2">
            <img
              src="src/assets/HomePage/image/search-icon.svg"
              className="absolute left-3 text-black"
              alt=""
            />
            <Input
              type="text"
              placeholder="Aradığınız ürünü yazınız"
              className="uppercase h-9 font-normal text-xs leading-4 text-[#333333] border-none pl-10 rounded-3xl bg-[#F3F3F3]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default index;
