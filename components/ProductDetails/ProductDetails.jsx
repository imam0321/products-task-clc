import Image from "next/image";
import BuyButton from "../AllButtons/BuyButton/BuyButton";

export default function ProductDetails({ product }) {

  return (
    <div className="my-6 h-screen">
      <div className="max-w-[984px] mx-auto bg-slate-100 border shadow-lg rounded-2xl sm:grid sm:grid-cols-[2fr_1fr]">
        {/* Product Image */}
        <div className="sm:order-2">
          <Image
            className="w-full lg:h-full h-[550px] object-cover md:rounded-tl-none md:rounded-bl-none rounded-2xl"
            src={`https://admin.refabry.com/storage/product/${product?.image}`}
            alt={product?.name}
            width={800}
            height={800}
          />
        </div>
        {/* Product Info */}
        <div className="py-4 px-4 flex flex-col h-full">
          <div className="flex-1">
            <h1 className="text-3xl mb-4 font-bold">{product?.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <p className="text-gray-500 line-through">Tk: {product?.price}</p>
              <p className="text-xl text-red-500 font-bold">
                Tk: {product?.price - product?.discount_amount}
              </p>
            </div>
            <p className="text-sm text-gray-700 whitespace-pre-line">{product?.short_desc}</p>
          </div>
          
          <div className="pt-6">
            <BuyButton product={product} details={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
