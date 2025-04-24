import ProductCard from "@/components/ProductCard/ProductCard";
import { getProducts } from "../actions/products";
import SeeMoreButton from "@/components/AllButtons/SeeMoreButton/SeeMoreButton";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No Product Found</p>
        )}
      </div>
      {/* TODO: see more button for show all products  */}
      {products.length > 4 && <SeeMoreButton />}
    </>
  );
}
