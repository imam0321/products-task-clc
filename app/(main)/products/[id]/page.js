import { getProductById } from "@/app/actions/products";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export const dynamic = "force-dynamic";
export const revalidate = 60; 

export default async function ProductDetailsPage({ params: { id } }) {
  const product = await getProductById(id);
  console.log(id);
  
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
