"use client";
import Image from "next/image";
import BuyButton from "../AllButtons/BuyButton/BuyButton";


export default function SingleCartDetails({ product }) {

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-700 rounded-lg hover:shadow-md transition my-2 p-4">
      <div className="flex items-center gap-4 w-full">
        <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={`https://admin.refabry.com/storage/product/${product?.image}`}
            alt={product?.name}
            width={64}
            height={64}
            priority
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {product?.name}
          </h3>
          <p className="text-sm font-medium text-gray-300">
            Tk: {product?.currentPrice}
          </p>
        </div>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4 md:w-2/5 w-full">
        <BuyButton product={product} />
      </div>
    </div>
  )
}
