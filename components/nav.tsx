import Link from 'next/link';
import 'tachyons';
const Nav = () => {
  return (
    <div>
      <nav className="pa3 pa4-ns">
        <Link href="/">
          <a className="link dim black b f6 f5-ns dib mr3" title="Shop">
            Shop
          </a>
        </Link>
        <Link href="/about">
          <a className="link dim black b f6 f5-ns dib mr3" title="About">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="link dim black b f6 f5-ns dib mr3" title="Contact">
            Contact
          </a>
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
