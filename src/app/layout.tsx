import "@/styles/globals.css";

import { type Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";

import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/site/theme-provider";

export const metadata: Metadata = {
  title: "EHeros | Community Projects and Sessions",
  description:
    "A modern portfolio for EHeros, a community organization leading projects, sessions, and service programs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "700", "800", "900"],
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${libre.variable}`}
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
