import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

function Header() {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist Logo"
            width={142}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        {/* USER ICON */}
        <UserDropDown />
      </div>
    </header>
  );
}
export default Header;
