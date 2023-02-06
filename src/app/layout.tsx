import "../styles/globals.css";
// import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartContextProvider from "../providers/CartContextProvider";
import { AnalyticsWrapper } from "../lib/clients/Analytics";
import { TRPCProvider } from "../providers/trpcProvider";
import { use } from "react";
import { getCurrentUser } from "../lib/servers/session";
import UserContextProvider from "../providers/UserProvider";
import AuthError from "../components/AuthError";
import cn from "../helpers/cn";
import { Toaster } from "../components/ui/Toast";
import { Inter as FontSans } from "@next/font/google";
import { ThemeProvider } from "../providers/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = use(getCurrentUser());

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50",
          fontSans.variable
        )}
      >
        <UserContextProvider user={user}>
          <TRPCProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <>
                {children}
                <Toaster position="bottom-right" />
                <Footer />
                <AuthError />
                <AnalyticsWrapper />
              </>
            </ThemeProvider>
          </TRPCProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
