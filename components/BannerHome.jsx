"use client";
import { useState } from "react";

export default function BannerHome() {
    const [iframeVideo, setIframeVideo] = useState(false);

    return (
        <>
            <div className="relative text-center banner-home  has-gradient-bg px-4 mt-[40px] xl:mt-[0px] ">
                <div className="container mx-auto">
                    <h1 className="text-[40px] xl:text-[90px] font-bold mb-[10px] leading-tight text-[#fff] text-shadow">
                        Ahadul Islam
                    </h1>

                    <h2 className="text-[22px] xl:text-[32px] leading-[1.6] font-normal mb-[10px] font-josefin-sans">
                        Full stack web developer
                    </h2>

                    <div className="social-icons flex items-center justify-center mt-6">
                        <h4 className="text-[20px] mr-[20px]">Follow me:</h4>
                        <div className="flex">
                            <a
                                href="https://www.youtube.com/@HappyCoding101"
                                target="_blank"
                                className="mr-[20px]"
                            >
                                <img
                                    src="/youtube.svg"
                                    alt="youtube icon"
                                    className="h-[40px] w-auto"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/coder618/"
                                target="_blank"
                                className="mr-[10px] "
                            >
                                <img
                                    src="/linkedin.svg"
                                    alt="linkedin icon"
                                    className="h-[40px] w-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Video Thumbnail */}
                    {!iframeVideo && (
                        <div className="relative rounded-[20px] overflow-hidden w-full max-w-[1040px] mx-auto mt-[60px] ">
                            <svg
                                width={120}
                                height={120}
                                viewBox="0 0 32 32"
                                fill="#98c7d7"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-1/2 top-1/2 -translate-x-[60px] -translate-y-[60px] cursor-pointer hover:scale-125 transition-transform duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIframeVideo(true);
                                }}
                            >
                                <path
                                    d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.0688 16.8225L14.5688 21.3225C14.4187 21.4263 14.2431 21.487 14.061 21.4981C13.8789 21.5093 13.6972 21.4704 13.5357 21.3856C13.3741 21.3009 13.2388 21.1736 13.1443 21.0175C13.0499 20.8614 13 20.6824 13 20.5V11.5C13 11.3176 13.0499 11.1386 13.1443 10.9825C13.2388 10.8264 13.3741 10.6991 13.5357 10.6144C13.6972 10.5296 13.8789 10.4907 14.061 10.5019C14.2431 10.513 14.4187 10.5737 14.5688 10.6775L21.0688 15.1775C21.2018 15.2695 21.3105 15.3924 21.3856 15.5357C21.4608 15.6789 21.5 15.8382 21.5 16C21.5 16.1618 21.4608 16.3211 21.3856 16.4643C21.3105 16.6076 21.2018 16.7305 21.0688 16.8225Z"
                                    fill="#fff"
                                />
                            </svg>

                            <img
                                src="/images/vt.jpg"
                                alt="Video thumbnail"
                                className="w-full h-auto cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIframeVideo(true);
                                }}
                            />
                        </div>
                    )}

                    {iframeVideo && (
                        <div className="relative rounded-[20px] overflow-hidden w-full max-w-[1040px] mx-auto mt-[60px] h-[500px]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/mRYOek34xIY?si=nzhpzjRB3GW3YmU3"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                    )}

                    {/* Video */}
                </div>
            </div>
        </>
    );
}
