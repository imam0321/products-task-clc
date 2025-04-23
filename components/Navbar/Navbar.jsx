"use client"
import Image from "next/image";
import Link from "next/link";
import CartDetails from "../CartDetails/CartDetails";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showCard, setShowCard] = useState(false);
  const items = useSelector(state => state.cart.items);

  const handleShowCard = () => {
    setShowCard(true);
  };

  return (
    <header>
      {showCard && <CartDetails onClose={() => setShowCard(false)} />}
      <nav className="fixed w-full flex items-center justify-between space-x-10 lg:py-4 py-2 px-5 bg-slate-800 z-30">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-white">
            Products
          </h1>
        </Link>
        <ul className="flex items-center lg:pe-2">
          <li>
            <Link
              className="bg-white hover:bg-slate-300 rounded-lg p-1 inline-block relative"
              onClick={() => handleShowCard()}
              href="#"
            >
              <Image
                src="/checkout.svg"
                width={24}
                height={24}
                alt="shopping Cart"
              />
              <span className="rounded-full absolute top-[-12px] left-[26px] bg-red-500 text-white font-semibold text-center p-[1px] w-[26px] h-[26px]">
                {/* add total quantity */}
                {
                  items.length === 0
                    ? "0"
                    : items.reduce((total, item) => total + item.quantity, 0)
                }
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}
