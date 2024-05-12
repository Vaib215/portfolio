'use client';
import Link from "next/link";
import {
  MenuIcon,
  XIcon
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
        <nav className={`flex duration-300 lg:items-center lg:space-x-6 ${isMenuOpen ? 'flex-col absolute inset-0 h-screen justify-center items-start p-8 bg-black text-4xl opacity-100' : 'opacity-0 absolute lg:static lg:opacity-100 lg:flex'}`}>
          <Button variant={"link"} size={"sm"} className="md:hidden absolute top-4 right-6 p-0" onClick={handleMenuClick} >
            <XIcon />
          </Button>
          <Link className="hover:text-gray-300" href="#home">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="#education">
            Education
          </Link>
          <Link className="hover:text-gray-300" href="#achievements">
            Achievements
          </Link>
          <Link className="hover:text-gray-300" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-gray-300" href="#blog">
            Blog
          </Link>
          <Link className="hover:text-gray-300" href="#contact">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={handleMenuClick}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};