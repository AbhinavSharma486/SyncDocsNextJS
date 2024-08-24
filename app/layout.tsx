import { Inter as FontSans } from "next/font/google";
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from "@clerk/themes";

import { cn } from "@/lib/utils";
import { Metadata } from "next";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SYNC DOCS",
  description: "Your go to collaborative editor"
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371FF",
          fontSize: '16px'
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
