
import Image from "next/image";
import Link from "next/link";
import BuyButton from "../AllButtons/BuyButton/BuyButton";

export default function ProductCard({ product }) {
  const discountPrice = product.price - product.discount_amount;

  return (
    <div className="border rounded-lg p-2 hover:shadow-lg transition relative">
      <Link href={`/products/${product.id}`} className="block">
        <div className="absolute top-3 right-3 bg-red-500 text-white font-semibold rounded-full p-2 text-center text-xs leading-tight">
          <div className="text-base">{product.discount_amount} Tk</div>
          <div className="text-[10px]">OFF</div>
        </div>
        <Image
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="mb-4 w-full rounded"
          width={200}
          height={80}
        />
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-500 text-sm">Stock: {product.stock === 0 ? "stock out" : product.stock}</p>
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-500 text-sm line-through">Tk: {product.price}</p>
          <p className="text-md font-bold text-slate-800">Tk: {discountPrice}</p>
        </div>
      </Link>
      <BuyButton product={product} />
    </div>
  );
}
