import Image from "next/image";
import Link from "next/link";
import BuyButton from "../AllButtons/BuyButton/BuyButton";

export default function ProductCard({ product }) {

  return (
    <div className="border rounded-lg p-2 hover:shadow-lg transition relative">
      <Link href={`/products/${product.id}`} className="block">
        {
          product?.discount_amount &&
          <div className="absolute top-4 right-4 bg-red-500 text-white font-semibold rounded-full p-2 text-center text-xs md:text-sm">
            <div className="text-xs md:text-sm">
              {product?.discount_amount} Tk OFF
            </div>
          </div>
        }
        <Image
          src={`https://admin.refabry.com/storage/product/${product?.image}`}
          alt={product?.name}
          className="mb-4 w-full max-h-[550px] rounded-lg object-cover"
          width={200}
          height={60}
        />
        <h2 className="text-lg font-semibold mb-1">{product?.name}</h2>
        <p className="text-gray-500 text-sm">Stock: {product?.stock === 0 ? "stock out" : product?.stock}</p>
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-500 text-sm line-through">Tk: {product?.price}</p>
          <p className="text-md font-bold text-slate-800">Tk: {product?.price - product?.discount_amount}</p>
        </div>
      </Link>
      <BuyButton product={product} />
    </div>
  );
}
