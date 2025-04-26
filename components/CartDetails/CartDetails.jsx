"use client"
import SingleCartDetails from "./SingleCartDetails";
import { useSelector } from "react-redux";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function CartDetails() {
  const products = useSelector(state => state.cart.items);

  return (
    <div className="fixed bg-[#12141D] right-0 lg:w-[700px] mid:w-full w-full shadow-2xl lg:mt-[4.4rem] mt-[4.8rem] pb-10 z-20 transition-all duration-500">
      <div className="md:p-8 p-5">
        <h2 className={`lg:text-3xl text-xl font-bold text-yellow-500 mb-6 sm:mb-8 ${!products.length > 0 && "text-white me-10"}`}>
          Your Carts
        </h2>
        <div className="max-h-[400px] overflow-y-auto px-4 z-30">
          {/* Single Cart Item */}
          {
            products.length > 0 ?
              products?.map(product => <SingleCartDetails key={product?.id} product={product} />) : (<p className="text-lg text-yellow-500">No Cart Found</p>)
          }
          {/* Checkout Form */}
          {
            products.length > 0 && <CheckoutForm products={products} />
          }
        </div>
      </div>
    </div>
  );
}
