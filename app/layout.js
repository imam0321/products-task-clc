import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Products Get Post",
  description: "This is a Products Get Post next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-16">{children}</main>
      </body>
    </html>
  );
}
