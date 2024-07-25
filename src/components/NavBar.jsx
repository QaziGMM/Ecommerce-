import React from "react";
import { Sparkle } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";

function NavBar() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
      <div className="flex md:justify-start justify-center text-sm font-bold text-gray-800">
        <Sparkle size={18} /> chanta
        <span className="text-[6px] align">TM</span>
      </div>
      <div className="flex justify-center gap-5 text-gray-800 text-sm">
        <a className="hover:text-white" href="">
          Shop{" "}
        </a>
        <a className="hover:text-white" href="">
          Collection
        </a>
        <a className="hover:text-white" href="">
          Explore
        </a>
        <a className="hover:text-white" href="">
          ...
        </a>
      </div>
      <div className="flex justify-center md:justify-end gap-2 text-sm text-gray-800">
        <a className="flex hover:text-white cen " href="">
          <ShoppingBag size={15} /> <p>Cart 0</p>
        </a>

        <a className="flex cen hover:text-white" href="">
          <User size={15} /> <br /> <p>My account</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
