import { getProducts } from "../actions/products";

export default async function HomePage() {
  const products = await getProducts();
  
  return (
    <div></div>
  );
}
