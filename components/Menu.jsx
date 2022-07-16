import Link from "next/link";
import { FaHome, FaTools, FaUser } from "react-icons/fa";

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <Link href="/" passHref>
          <a>
            <li><FaHome/> Home</li>
          </a>
        </Link>
        <Link href="/AboutMe" passHref>
          <a>
            <li><FaUser/> About Me</li>
          </a>
        </Link>
        <Link href="/Projects" passHref>
          <a>
            <li><FaTools/> Projects</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};
