import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/">Movie App</Link>
        </div>
        <div className="navbar-links"></div>
        <Link href="/">Home</Link>
        <Link href="/Favourites">Favs</Link>
      </nav>
    </>
  );
}

export default Navbar;
