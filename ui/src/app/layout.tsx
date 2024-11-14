"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import { OrderProvider } from "@/providers/OrderProvider";
import { NuqsAdapter } from "nuqs/adapters/next";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <NuqsAdapter>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <AuthProvider>
            <OrderProvider>
              <Header />
              <main className="flex-grow ">{children}</main>
              <Toaster />
              <Footer />
            </OrderProvider>
          </AuthProvider>
        </body>
      </html>
    </NuqsAdapter>
  );
};

export default RootLayout;
