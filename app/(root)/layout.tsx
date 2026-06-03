import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/landingpage/navbar";
import { ThemeProvider } from "@/components/context-provider/theme-provider";
import Footer from "@/components/landingpage/footer";

const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RavenIQ Labs",
  description: "Intelligent systems for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className={inter.className} suppressHydrationWarning>
      <div className= "antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar/>
          {children}
        <Footer/>
        </ThemeProvider>
      </div>
    </div>
  );
}
