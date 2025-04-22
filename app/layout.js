import "./globals.css";

export const metadata = {
  title: "Products Get Post",
  description: "This is a Products Get Post next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
