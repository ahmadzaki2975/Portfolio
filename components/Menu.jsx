import Link from "next/link";

export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <Link href="/AboutMe" passHref>
          <a>
            <li>About Me</li>
          </a>
        </Link>
        <Link href="/Projects" passHref>
          <a>
            <li>Projects</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};
