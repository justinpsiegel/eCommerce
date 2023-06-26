import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[lightblue]">
        <div className="links">
          <Link
            to="/"
            className="hover:bg-blue-500 rounded w-[80px] h-[40px] flex justify-center transition-all items-center"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="hover:bg-blue-500 rounded w-[80px] h-[40px] flex justify-center transition-all items-center"
          >
            <ShoppingCart size="32" />
          </Link>
        </div>
      </div>
      <h1 className="flex justify-center my-4 text-5xl">Shop of The Gull</h1>
    </div>
  );
};

export default Navbar;
