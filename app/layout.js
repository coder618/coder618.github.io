import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import BannerHome from "@/components/BannerHome";

export const metadata = {
    title: "Ahadul Islam",
    description: "Full stack web developer",
};

import MainNavigation from "@/components/layout/MainNavigation";
import Footer from "@/components/layout/Footer";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-with-grid">
                <MainNavigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
