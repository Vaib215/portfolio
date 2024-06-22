"use client";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link className="hover:text-gray-300" href={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/50 z-40 w-full backdrop-blur fixed top-0 text-white py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" href="#" scroll={false}>
          Vaibhav Kumar Singh
        </Link>
        <nav
          className={`flex duration-300 lg:items-center lg:space-x-6 ${
            isMenuOpen
              ? "flex-col absolute inset-0 h-screen justify-center items-start p-8 bg-black text-4xl opacity-100"
              : "opacity-0 pointer-events-none lg:pointer-events-auto absolute lg:static lg:opacity-100 lg:flex"
          }`}
        >
          <Button
            variant={"link"}
            size={"sm"}
            className="md:hidden absolute top-4 right-6 p-0"
            onClick={handleMenuClick}
          >
            <XIcon />
          </Button>
          <NavLink
            href="#home"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            href="#education"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Education
          </NavLink>
          <NavLink
            href="#achievements"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Achievements
          </NavLink>
          <NavLink
            href="#projects"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Projects
          </NavLink>
          <NavLink
            href="#blog"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Blog
          </NavLink>
          <NavLink
            href="#contact"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Contact
          </NavLink>
        </nav>
        <button className="md:hidden" onClick={handleMenuClick}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
