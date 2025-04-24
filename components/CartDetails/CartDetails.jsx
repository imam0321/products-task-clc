"use client"
import SingleCartDetails from "./SingleCartDetails";
import CloseButton from "../AllButtons/CloseButton/CloseButton";
import { useSelector } from "react-redux";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function CartDetails({ onClose }) {
  const products = useSelector(state => state.cart.items);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] max-h-[90vh] overflow-y-auto p-4">
        <div className="bg-white dark:bg-[#12141D] shadow-2xl rounded-2xl p-5 sm:p-7 md:p-9 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
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
          {/* Footer Buttons */}
          <div className="flex justify-end mt-2">
            <CloseButton onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
