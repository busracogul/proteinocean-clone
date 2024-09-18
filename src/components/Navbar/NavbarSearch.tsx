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
          <Button variant="outline">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <img
                    src="src/assets/HomePage/image/user.svg"
                    className=""
                    alt=""
                  />
                  <div className="mx-2">
                    HESAP
                  </div>
                  
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
            <SheetTrigger>
              <Button variant="secondary" type="submit" className="px-6">
                <img
                  src="src/assets/HomePage/image/sepet.svg"
                  className="pr-2"
                  alt=""
                />
                SEPET
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>SEPETİM</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default NavbarSearch;
