import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-gray-200 justify-between p-4">
      <a href="/" className="flex items-center">
        <img className="h-10 w-auto" src="/logo.png" alt="logo" />
      </a>

      <div className="flex-grow">
        <ul className="flex gap-6 justify-end">
          <li>
            <Link
              smooth={true}
              to="Contacto"
              className="text-slate-600 hover:text-pink-400"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="Servicios"
              className="text-slate-600 hover:text-pink-400"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              to="Contacto"
              className="text-slate-600 hover:text-pink-400"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
