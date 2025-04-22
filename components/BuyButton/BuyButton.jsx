"use client"

import { useState } from "react";

export default function BuyButton({ details }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={() => setQuantity(1)}
          className={`${details === true ? "w-[200px]" : "w-full"} bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-2 text-lg transition`}
        >
          Add To Cart
        </button>
      ) : (
        <div className={`${details === true ? "w-[200px]" : "w-full"} flex items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-2 text-lg font-semibold`}>
          <button onClick={decrement} className="text-lg">-</button>
          <span>{quantity}</span>
          <button onClick={increment} className="text-lg">+</button>
        </div>
      )}
    </>
  )
}
