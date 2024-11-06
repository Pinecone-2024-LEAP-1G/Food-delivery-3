import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import { UserProvider } from "@/providers/UserProvider";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <UserProvider>
            <Header />
            <main className="flex-grow ">{children}</main>
            <Toaster />
            <Footer />
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
