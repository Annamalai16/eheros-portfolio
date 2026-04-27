import "@/styles/globals.css";

import { type Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";

import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/site/theme-provider";

export const metadata: Metadata = {
  title: "EHeros | Community Projects and Sessions",
  description:
    "A modern portfolio for EHeros, a community organization leading projects, sessions, and service programs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${publicSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
