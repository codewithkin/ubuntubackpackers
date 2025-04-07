import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="hidden md:flex w-full border-b border-slate-900 justify-between items-center py-4 px-4 lg:px-12">
      <article className="flex gap-2 items-center">
        <Image
          src="/images/brand/logo.png"
          alt="Ubuntu Backpackers Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-lg lg:text-xl font-bold">Ubuntu Backpackers</h1>
      </article>

      {/* Links */}
      <ul className="flex gap-6">
        <li>
          <Link
            className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline"
            href="/explore"
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-900 hover:font-medium duration-300 transition-colors hover:underline"
            href="/restaurant"
          >
            Restaurant
          </Link>
        </li>
      </ul>

      {/* CTA */}
      <Button asChild>
        <Link href="/rooms">Book a room</Link>
      </Button>
    </nav>
  );
}

export default Navbar;
