import Link from "next/link"

export const Navbar = () => {
  return(
    <div className="navbar dark">
      <Link href="/" passHref>
        <a>
          <h2>Home</h2>
        </a>
      </Link>
    </div>
  )
}