"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-800/95 backdrop-blur-sm border-b border-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold relative group">
  <img src="/logo.jpg" alt="Logo" className="inline-block h-8 mr-2" />
  <span className="text-sm bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
    Jayantak Media Solutions Pvt. Ltd.
  </span>
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative py-2 transition-colors duration-300 hover:text-orange-400",
                      "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full",
                      pathname === link.href
                        ? "text-orange-400 after:w-full"
                        : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-purple-700/50 transition-colors duration-300"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-gradient-to-b from-purple-800 to-purple-900 text-white border-l border-purple-700"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg px-4 py-2 rounded-lg transition-all duration-300",
                        "hover:bg-purple-700/50 hover:text-orange-400",
                        pathname === link.href
                          ? "bg-purple-700/50 text-orange-400"
                          : "text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
