"use client"
import SingleCartDetails from "./SingleCartDetails";
import { useSelector } from "react-redux";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function CartDetails({ onClose }) {
  const products = useSelector(state => state.cart.items);

  return (
    <div className="fixed right-0 z-50 flex items-center justify-start mt-[4.9rem] lg:mt-[4.4rem]">
      <div className="w-full max-w-[790px] h-[calc(100vh-4.4rem)] z-50">
        <div className="bg-[#12141D] shadow-2xl p-5 sm:p-7 md:p-9 transition-all duration-300 h-full overflow-y-auto">
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 ${!products.length > 0 && "me-10"}`}>
            Your Carts
          </h2>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-h-[450px] overflow-y-auto pr-1 sm:pr-2">
            {/* Single Cart Item */}
            {
              products.length > 0 ?
                products?.map(product => <SingleCartDetails key={product.id} product={product} />) : (<p className="text-lg text-yellow-500">No Cart Found</p>)
            }
          </div>
          {/* Checkout Form */}
          {
            products.length > 0 && <CheckoutForm products={products} />
          }
        </div>
      </div>
    </div>
  );
}
