'use client'
import { postPlaceOrder } from "@/app/actions/products";
import { clear } from "@/lib/store/features/cart/cartSlice";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CheckoutForm({ products }) {
  const dispatch = useDispatch()
  const [checkoutInfo, setCheckoutInfo] = useState({
    product_ids: "",
    s_product_qty: "",
    c_phone: "",
    c_name: "",
    courier: "",
    address: "",
    cod_amount: "",
    discount_amount: 0,
    delivery_charge: "80"
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get all products id 
    const product_ids = products.map(p => p.id).join(",");

    // get all products quantity 
    const s_product_qty = products.map(p => p.quantity).join(",");

    // get total products quantity total price with delivery charge 
    const deliveryCharge = parseFloat(checkoutInfo.delivery_charge || "0");
    const cod_amount = products.reduce((sum, item) => sum + (item.currentPrice * item.quantity), deliveryCharge);

    // get total discount price
    const discount_amount = products.reduce((sum, item) => sum + (item.discountPrice || 0) * item.quantity, 0);

    setCheckoutInfo(checkoutInfo => ({
      ...checkoutInfo,
      product_ids,
      s_product_qty,
      cod_amount,
      discount_amount
    }));
  }, [products, checkoutInfo.delivery_charge]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutInfo(checkoutInfo => ({
      ...checkoutInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await postPlaceOrder(checkoutInfo);
      if (response) {
        setLoading(false);
        dispatch(clear());
        alert(`Order Placed: ${response}`);
      } else {
        alert("Order failed: No response from server");
      }
    } catch (error) {
      alert(`Error placing order: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <h1 className="text-white text-xl font-semibold mb-4">Checkout Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c_name">Customer Name</label>
          <input
            type="text"
            name="c_name"
            placeholder="Customer Name"
            value={checkoutInfo.c_name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="c_phone">Phone Number</label>
          <input
            type="tel"
            name="c_phone"
            placeholder="Phone Number"
            value={checkoutInfo.c_phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={checkoutInfo.address}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cod_amount">Total Discount</label>
          <input
            type="number"
            name="discount_amount"
            placeholder="COD Amount"
            value={checkoutInfo.discount_amount}
            onChange={handleChange}
            className="input-field"
            disabled
          />
        </div>

        <div>
          <label htmlFor="delivery_charge">Delivery Charge</label>
          <input
            type="number"
            name="delivery_charge"
            placeholder="Delivery Charge"
            value={checkoutInfo.delivery_charge}
            onChange={handleChange}
            className="input-field"
            disabled
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cod_amount">Total Amount</label>
          <input
            type="number"
            name="cod_amount"
            placeholder="COD Amount"
            value={checkoutInfo.cod_amount}
            onChange={handleChange}
            className="input-field"
            disabled
          />
        </div>
        <div>
          <label htmlFor="delivery_charge">Courier Name</label>
          <input
            type="text"
            name="courier"
            placeholder="Courier Name"
            value={checkoutInfo.courier}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center lg:w-1/3 w-full"
        disabled={loading}
      >
        <Image
          src="/checkout.svg"
          width={20}
          height={20}
          alt="checkout"
          className="invert brightness-200"
        />
        <span>{loading ? "Processing..." : "Checkout"}</span>
      </button>
    </form>
  );
}
