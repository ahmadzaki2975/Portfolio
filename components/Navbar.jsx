import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link href="/" passHref>
          <a>
            <Image src="/Z-Logo-2-min.svg" width={35} height={35} alt="Logo"/>
          </a>
        </Link>
        <div
          className="navbar-btn"
          onClick={() => {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("active");
          }}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
};
