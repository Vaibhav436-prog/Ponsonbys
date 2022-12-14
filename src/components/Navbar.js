import React from "react";
import Cart from "./Cart";

const Navbar = ({ state, mode, text, handleCart }) => {
  const { amount } = state;
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="logo">
            <h2>Ponsonbys</h2>
          </div>

          <div className="right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handleCart} className="micky">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg>
            <div className="cart-amount">
              <p>{amount}</p>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
