import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between py-6 lg:px-8 px-2 mx-auto">
      <div>
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 text-gray-900 transform transition duration-300 ease-in-out" />
          <span className="font-extrabold text-gray-900">SummariAIze</span>
        </NavLink>
      </div>
      <div className="flex justify-center gap:4 lg:gap-12 lg:items-center">
        <NavLink href="/pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Dashboard</NavLink>}
      </div>

      <div className="flex lg:justify-end">
        <div className="flex gap-2 items-center">
          {!isLoggedIn ? (
            <NavLink href="/sigin">Sign In</NavLink>
          ) : (
            <div className="flex gap-2 items-center">
              <NavLink href="/upload">Upload a PDF</NavLink>
              <div>pro</div>
              <Button>Sign Out</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
