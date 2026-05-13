import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMER LABS — AI-Powered Creative Technology Studio",
  description:
    "Lumer Labs is a premium AI-powered creative technology studio designing intelligent digital experiences. We specialize in AI Development, SaaS Products, Web Experiences, Video Production, and Creative Design.",
  keywords: [
    "AI Development",
    "Creative Technology",
    "SaaS",
    "Web Design",
    "Video Production",
    "Digital Agency",
    "Lumer Labs",
  ],
  openGraph: {
    title: "LUMER LABS — AI-Powered Creative Technology Studio",
    description:
      "Designing Intelligent Digital Experiences. Premium AI-powered creative technology studio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
