import Image from "next/image";
import BuyButton from "../BuyButton/BuyButton";
import Link from "next/link";

export default function CartDetails({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] max-h-[90vh] overflow-y-auto p-4">
        <div className="bg-white dark:bg-[#12141D] shadow-2xl rounded-2xl p-5 sm:p-7 md:p-9 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
            Your Carts
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-h-[450px] overflow-y-auto pr-1 sm:pr-2">
            {/* Single Cart Item */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-center gap-4 w-full">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src="/product.webp"
                    alt="imam"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    Imam
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    imam
                  </p>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Tk 10
                  </span>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <BuyButton details={true} />
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center"
            >
              <Image
                src="/checkout.svg"
                width={20}
                height={20}
                alt="checkout"
                className="invert brightness-200"
              />
              <span>Checkout</span>
            </Link>
            <button
              onClick={onClose}
              className="border border-gray-400 hover:border-gray-500 text-gray-700 dark:text-gray-200 font-semibold px-5 py-2 rounded-lg transition w-full sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
