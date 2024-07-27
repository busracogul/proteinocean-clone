
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/index";
import { ReactElement } from "react";

interface Layout {
  children: ReactElement;
}

function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
