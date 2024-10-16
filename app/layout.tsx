import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBarAll from "./DashBoard2/NavBarAll";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "system manager",
  description: " report systems and get information about them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBarAll />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Analytics/>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
