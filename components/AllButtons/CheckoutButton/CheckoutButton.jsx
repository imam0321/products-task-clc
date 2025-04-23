import Image from "next/image";


export default function CheckoutButton({products}) {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center"
    >
      <Image
        src="/checkout.svg"
        width={20}
        height={20}
        alt="checkout"
        className="invert brightness-200"
      />
      <span>Checkout</span>
    </button>
  )
}
