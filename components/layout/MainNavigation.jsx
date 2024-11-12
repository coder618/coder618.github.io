"use client";
import Link from "next/link";

export default function MainNavigation() {
    return (
        <div className="main-navigation bg-transparent w-full xl:py-8 p-4  ">
            <div className="container mx-auto flex items-center justify-between">
                <a
                    href="https://coder618.github.io"
                    className="brand text-white font-bold text-[20px] md:text-[30px]  no-underline"
                >
                    coder618
                </a>

                <a
                    href="#"
                    className="cta-btn md:w-[160px] md:h-[60px] w-[140px] h-[50px] flex cursor-pointer text-black text-lg font-bold hover:bg-yellow-300 shadow-lg no-underline mt-0"
                    onClick={(e) => {
                        e.preventDefault();
                        const isHomePage = window.location.pathname === "/";

                        if (!isHomePage) {
                            window.location.href = "/#contact";
                        } else {
                            const contactSection = document.querySelector("#contact");
                            if (contactSection) {
                                contactSection.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }
                    }}
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
}
