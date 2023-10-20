import { useRouteError } from "react-router-dom";

import Hero from "../components/Home/Hero";
import Download from "../components/Home/Download";
import Skills from "../components/Home/Skills";
import Products from "../components/Projects";

export default function Home() {
    return (
        <>
            <Hero />
            {/* <Download /> */}
            <Skills />
            <Products />
        </>
    );
}
