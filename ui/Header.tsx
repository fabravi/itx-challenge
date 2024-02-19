import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header>
    <Image src="/logo.svg" alt="ZARA Logo" width={140} height={60} />
    <Link href="/products">Products</Link>
    <Link href="/editor">Editor</Link>
  </header>
);

export default Header;
