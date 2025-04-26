import SingleCartDetails from "./SingleCartDetails";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function CartDetails({ items }) {

  return (
    <div className="md:p-8 p-5">
      <h2 className="lg:text-3xl text-xl text-white  font-bold mb-6 sm:mb-8">
        Your Carts
      </h2>
      <div className="max-h-[400px] overflow-y-auto px-4 z-30">
        {/* Single Cart Item */}
        {
          items?.map(product => <SingleCartDetails key={product?.id} product={product} />)
        }
        {/* Checkout Form */}
        {
          <CheckoutForm products={items} />
        }
      </div>
    </div>
  );
}
