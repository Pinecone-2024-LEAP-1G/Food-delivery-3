import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow ">{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
