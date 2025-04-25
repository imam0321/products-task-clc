"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="text-center">
        <p className="text-red-500 font-semibold">Oops</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>
        <p className="mt-4 text-gray-600">
          There was an error processing your request.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg"
        >
          Go Back to Home
        </Link>
      </div>
    </main>
  );
}
