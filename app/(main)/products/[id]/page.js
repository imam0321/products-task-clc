import { getProductById } from "@/app/actions/products";
import ProductDetails from "@/components/ProductDetails/ProductDetails";


export default async function ProductDetailsPage({ params: { id } }) {
  const product = await getProductById(id);
  
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
