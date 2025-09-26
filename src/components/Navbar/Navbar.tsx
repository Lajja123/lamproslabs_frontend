import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/logo.svg";
import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Navbar() {
  return (
    <nav className="flex items-start justify-between w-[90%] mx-auto py-6">
      {/* Left: Logo */}
      <div className="flex-1 flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Lampros DAO logo"
            width={160}
            height={160}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Right: Menu */}
      <div className="flex-1 flex justify-end">
        <ul className="flex flex-col items-end gap-2">
          <li>
            <Link href="/" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="accent" // Active link
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/about" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/governance" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Governance
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/contribution" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Contribution
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
