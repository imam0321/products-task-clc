import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";

export const metadata = {
  title: "Products",
  description: "This is a Products Get and Place Order next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <StoreProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 pt-16">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
