import Link from "next/link";

export default function Portfolio() {
    const items = [
        {
            title: "Tally counter App with PWA",
            description:
                "A multilingual tally counter support multiple counter, support pwa function in both mobile and windows 11 pc",
            image: "/images/online-tally-counter.png",
            link: "/online-tally-counter",
        },
        {
            title: "Eazy Icon",
            description:
                "Download more than 9000+ free icons with custom color in both svg and png format",
            image: "/images/eazyicon.png",
            link: "/eazyicon",
        },
        {
            title: "Weather App",
            description:
                "A weather web app based on React.js and OpenWeather API, with some cool features.",
            image: "/images/weather-app.png",
            link: "/weather-feed",
        },
        {
            title: "Advance Importer",
            description:
                "This wordpress plugin help you to import data from other wordpress website with all Media and attachment's data.",
            image: "/images/advance-importer.png",
            link: "/advance-importer",
        },
    ];

    return (
        <>
            <div className="relative py-[60px] xl:py-[100px] px-4">
                <div className="text-center z-10">
                    <h2 className="text-[35px] xl:text-[50px] font-bold leading-tight text-white text-shadow mb-[40px] xl:mb-[80px]">
                        Some of my personal projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[580px_580px] xl-gap-[30px] gap-[20px] place-items-center  justify-center">
                    {items.map((item) => {
                        return (
                            <Link
                                href={item.link}
                                className="w-full mx-auto border border-[#2b415c] rounded-[20px] overflow-hidden no-underline transition-all hover:scale-[1.03]  transform ease-out  hover:border-secondary hover:shadow-ccc "
                                title="Online tally counter"
                            >
                                <img
                                    src={`${item.image}`}
                                    alt="Online Tally Counter"
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="p-[30px] md:p-[40px]">
                                    <h3 className="text-[26px] font-bold leading-tight text-white mb-[8px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[18px] text-[#a09cbb] leading-[1.6]">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
