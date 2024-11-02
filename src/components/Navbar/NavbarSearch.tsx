import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

function NavbarSearch() {
  return (
    <>
      <div className="container flex justify-between">
        <div className="flex">
          <img src="src/assets/HomePage/image/LOGO_Siyah.svg" alt="" />
        </div>
        <div className="flex md:w-60 lg:w-full lg:max-w-sm items-center py-4">
          <Input
            type="text"
            placeholder="Aradığınız ürünü yazınız"
            className="rounded-r-none"
          />
          <Button
            variant="secondary"
            className="px-6 rounded-l-none -ml-px"
            type="submit"
          >
            ARA
          </Button>
        </div>
        <div className="flex md:w-32 lg:w-44 items-center">
          <Button asChild={true} variant="outline">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <img
                    src="src/assets/HomePage/image/user.svg"
                    className=""
                    alt=""
                  />
                  <div className="mx-2">HESAP</div>
                  <img
                    src="src/assets/HomePage/image/chevron.svg"
                    className=""
                    alt=""
                  />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Üye Girişi</MenubarItem>
                  <MenubarItem>Üye Ol</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </Button>
        </div>
        <div className="flex md:w-28 lg:w-36 items-center">
          <Sheet>
            <SheetTrigger asChild={true}>
              <Button variant="secondary" type="submit" className="px-10">
                <img
                  src="src/assets/HomePage/image/sepet.svg"
                  className="pr-2"
                  alt=""
                />
                SEPET
              </Button>
            </SheetTrigger>
            <SheetContent
              hideCloseButton
              className="h-full flex flex-col justify-between"
            >
              <SheetHeader>
                <SheetTitle className="mt-3">SEPETİM</SheetTitle>
              </SheetHeader>
              <SheetDescription className="flex justify-center items-center bg-[#F7F7F7] h-full font-normal">
                Sepetinizde Ürün Bulunmamaktadır
              </SheetDescription>
              <SheetFooter className="block container mb-4">
                <div className="uppercase text-right w-full font-bold leading-3 text-sm">
                  toplam <span>0</span> tl
                </div>
                <Button
                  className="w-full uppercase mt-2 font-bold text-lg leading-10"
                  variant="dark"
                >
                  devam et
                  <img
                    src="src/assets/HomePage/image/chevron-white.svg"
                    alt=""
                    className="ms-4"
                  />
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default NavbarSearch;
