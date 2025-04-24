import { getProductById } from "@/app/actions/products";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export default async function ProductDetailsPage({ params: { id } }) {
  const product = await getProductById(id);

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }
  
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
