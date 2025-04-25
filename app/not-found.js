import Link from "next/link";

export default function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600">
          Something went wrong!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We could not find the page you are looking for. Please try again
          later.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
