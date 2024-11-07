import BannerHome from "@/components/BannerHome";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <BannerHome />
            <Stats />
            <Skills />
            <Portfolio />
            <Technologies />
            <Contact />
        </>
    );
}
