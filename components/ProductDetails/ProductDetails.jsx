import Image from "next/image";
import BuyButton from "../BuyButton/BuyButton";

export default function ProductDetails({ product }) {
  const discountPrice = product.price - Number(product.discount_amount);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-gray-500 line-through">Tk: {product.price}</p>
            <p className="text-xl text-red-600 font-bold">Tk: {discountPrice}</p>
          </div>

          <p className="text-gray-700 mb-6 whitespace-pre-line">{product.short_desc}</p>

          <BuyButton productId={product.id} details={true} />
        </div>
      </div>
    </div>
  );
}
