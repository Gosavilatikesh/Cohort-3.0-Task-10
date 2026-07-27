import React, { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, ShoppingBag } from "lucide-react";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

const Navbar = ({ onLogout, cartItem = [] }) => {
  const { setLogedInUser } = useContext(Auth);
  const navigate = useNavigate();

  // Calculate total quantity across all items in the cart
  const totalCartCount = cartItem.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center shadow-lg">
            <ShoppingCart className="text-white" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-2xl text-slate-900">SkyMart</h1>
            <p className="text-xs text-slate-500">Smart Shopping</p>
          </div>
        </NavLink>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-slate-600 hover:text-orange-500 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-slate-600 hover:text-orange-500 transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-slate-600 hover:text-orange-500 transition"
            }
          >
            About
          </NavLink>
        </nav>

        {/* Profile, Cart & Logout Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Icon & Quantity Badge */}
          <NavLink
            to="/cart"
            className="relative p-2.5 rounded-xl text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center justify-center"
            aria-label="View Cart"
          >
            <ShoppingBag size={22} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold h-5 min-w-[20px] px-1 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {totalCartCount > 99 ? "99+" : totalCartCount}
              </span>
            )}
          </NavLink>

          {/* Profile Badge */}
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-md shadow-orange-500/20">
              L
            </div>

            <span className="hidden md:block font-medium text-slate-700">
              Latikesh
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-slate-200" />

          {/* Logout Action Button */}
          <button
            onClick={() => {
              localStorage.removeItem("logedInUser");
              setLogedInUser(null);
              toast.success("User Successfully Logged Out");
              navigate("/");
            }}
            aria-label="Logout"
            className="p-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all duration-200 active:scale-95 flex items-center gap-2 group"
          >
            <LogOut
              size={20}
              className="group-hover:translate-x-0.5 transition-transform"
            />
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
              Logout
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;