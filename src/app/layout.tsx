import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iramam Silva | Senior BI Analyst & Data Intelligence Architect",
  description: "Professional portfolio of Iramam Silva (Fenri-Lunaedge), a Senior Business Intelligence Analyst specializing in Tableau, Power BI, ETL pipelines, and NLP-powered analytics. 5+ years transforming data into strategic insights.",
  keywords: [
    "Business Intelligence",
    "Data Analytics",
    "Tableau",
    "Power BI",
    "ETL",
    "Apache Hop",
    "Pentaho",
    "Python",
    "SQL",
    "NLP",
    "Data Visualization",
    "BI Analyst",
    "Data Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Iramam Silva", url: "https://fenri-lunaedge.github.io" }],
  creator: "Iramam Silva (Fenri-Lunaedge)",
  publisher: "Fenri-Lunaedge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fenri-lunaedge.github.io",
    title: "Iramam Silva | Senior BI Analyst & Data Intelligence Architect",
    description: "Professional portfolio showcasing 5+ years of expertise in Business Intelligence, Data Analytics, and ETL engineering",
    siteName: "Fenri-Lunaedge Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iramam Silva | Senior BI Analyst",
    description: "Transforming data into strategic insights | Tableau | Power BI | Python | ETL",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Grid background pattern */}
        <div className="fixed inset-0 grid-background pointer-events-none" />

        {/* Radial gradients for visual effects */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-radial-cyan pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-gradient-radial-purple pointer-events-none" />

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
