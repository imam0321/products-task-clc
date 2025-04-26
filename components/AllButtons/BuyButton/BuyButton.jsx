"use client"

import { add, decrement, increment } from "@/lib/store/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BuyButton({ product }) {
  const dispatch = useDispatch();
  const productId = product?.id

  // Get quantity from Redux store
  const quantity = useSelector(state =>
    state.cart.items.find(item => item.id === productId)?.quantity || 0
  );

  const handleAddToCart = () => {
    dispatch(add({ id: productId, quantity: 1, product }));
  };

  const handleIncrement = () => {
    dispatch(increment(productId));
  };

  const handleDecrement = () => {
    dispatch(decrement(productId));
  };

  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-2 text-lg transition"
        >
          Add To Cart
        </button>
      ) : (
        <div className="w-full flex items-center justify-between gap-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-2 text-lg font-semibold transition">
          <button onClick={handleDecrement} className="text-lg ms-2 hover:bg-slate-600 px-2 rounded">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="text-lg me-2 hover:bg-slate-600 px-2 rounded">
            +
          </button>
        </div>
      )}
    </>
  )
}
