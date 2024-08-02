import NavbarSearch from "./NavbarSearch";
import NavbarLinks from "./NavbarLinks";
import NavbarSubMenu from "./NavbarSubMenu";

function index() {
  return (
    <>
      <nav>
        <NavbarSearch />
        <NavbarLinks />
        <NavbarSubMenu />
      </nav>
    </>
  );
}

export default index;
