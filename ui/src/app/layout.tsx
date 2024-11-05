import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthProvider";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Header />
          <main className="flex-grow ">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
