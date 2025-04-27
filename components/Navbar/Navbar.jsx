"use client"
import Image from "next/image";
import Link from "next/link";
import CartDetails from "../CartDetails/CartDetails";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const items = useSelector(state => state.cart.items);

  // calculate total quantity 
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  // Automatically close sidebar if cart becomes empty
  useEffect(() => {
    if (items.length === 0) {
      setShowSideBar(false);
    }
  }, [items]);

  return (
    <header>
      {(showSideBar && items.length > 0) && (
        <div className={`fixed lg:w-[700px] w-full bg-[#12141D] shadow-2xl right-0 mt-16 pb-10 z-20 ease-in-out ${showSideBar && items.length > 0 ? "translate-x-0" : "translate-x-full"}`}>
          <CartDetails products={items}/>
        </div>
      )}
      <nav className="fixed w-full flex items-center justify-between gap-4 md:gap-10 py-4 px-8 bg-slate-800 z-30">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-white">
            Products
          </h1>
        </Link>
        <ul className="flex items-center lg:pe-2 gap-2">
          <li>
            <Link href='/' className="bg-white px-3 py-1 rounded-lg inline-block">Home</Link>
          </li>
          <li>
            <button
              className="bg-white hover:bg-slate-300 rounded-lg p-1 inline-block relative"
              onClick={() => items.length > 0 && setShowSideBar(!showSideBar)}
            >
              {(items.length === 0 || !showSideBar) ? (
                <>
                  <Image
                    src="/checkout.svg"
                    width={22}
                    height={22}
                    alt="shopping Cart"
                  />
                  <span className="absolute top-[-12px] left-[26px] bg-red-500 text-white font-semibold text-center rounded-full p-[1px] w-[26px] h-[26px]">
                    {totalQuantity}
                  </span>
                </>
              ) : (
                <p className="text-balance text-black font-semibold px-2">X</p>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>

  )
}
