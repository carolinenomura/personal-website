import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Caroline Nomura",
  description: "Personal website of Caroline Nomura, a software and data engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} h-full scroll-smooth`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
