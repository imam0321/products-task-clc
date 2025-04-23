import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="fixed w-full flex items-center justify-between space-x-10 lg:py-4 py-2 px-5 bg-slate-800 z-30">
      <Link href="/">
        <h1 className="text-2xl font-semibold text-white">
          Products
        </h1>
      </Link>

      <ul className="flex items-center lg:pe-2">
        <li>
          <Link
            className="bg-white hover:bg-slate-300 rounded-lg p-1 inline-block relative"
            href="#"
          >
            <Image
              src="/checkout.svg"
              width={24}
              height={24}
              alt="shopping Cart"
            />
            <span className="rounded-full absolute top-[-12px] left-[26px] bg-red-500 text-white font-semibold text-center p-[1px] w-[26px] h-[26px]">
              0
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
