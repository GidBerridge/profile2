import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <nav className="md:mr-auto md:ml-auto md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-6 text-white hover:text-yellow-500">
            About
          </a>
          <a href="#projects" className="mr-6 text-white hover:text-yellow-500">
            Past Work
          </a>
          <a href="#skills" className="mr-6 text-white hover:text-yellow-500">
            Skills
          </a>
          <a
            href="#contact"
            className="mr-5 text-white hover:text-yellow-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}