import Link from "next/link";

export default function Portfolio() {
    const items = [
        {
            title: "Fluentlly",
            description:
                "An English learning app focused on speaking improvement, grammar, and vocabulary, with lots of features.",
            image: "/images/fluentlly.jpg",
            link: "http://fluentlly.com/",
        },
        {
            title: "Eazy Icon",
            description:
                "Download more than 9000+ free icons with custom color in both svg and png format",
            image: "/images/eazyicon.jpg",
            link: "/eazyicon",
        },
        {
            title: "Tally counter App with PWA",
            description:
                "A multilingual tally counter support multiple counter, support pwa function in both mobile and windows 11 pc",
            image: "/images/online-tally-counter.jpg",
            link: "/online-tally-counter",
        },
        {
            title: "Advance Importer",
            description:
                "This wordpress plugin help you to import data from other wordpress website with all Media and attachment's data.",
            image: "/images/advance-importer.jpg",
            link: "/advance-importer",
        },
        {
            title: "Weather App",
            description:
                "A weather web app based on React.js and OpenWeather API, with some cool features.",
            image: "/images/weather-app.jpg",
            link: "/weather-feed",
        },
    ];

    return (
        <div className="relative py-[60px] xl:py-[100px] px-4">
            <div className="text-center z-10">
                <h2 className="text-[35px] xl:text-[50px] font-bold leading-tight text-white text-shadow mb-[40px] xl:mb-[80px]">
                    Some of my personal projects
                </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[580px_580px] xl-gap-[30px] gap-[20px] place-items-center justify-center">
                {items.map((item) => {
                    const isExternal = item.link.startsWith("http");

                    const content = (
                        <div className="w-full mx-auto border border-[#2b415c] rounded-[20px] overflow-hidden no-underline transition-all hover:scale-[1.03] transform ease-out hover:border-secondary hover:shadow-ccc">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            <div className="p-[25px] md:p-[40px]">
                                <h3 className="text-[22px] md:text-[26px] font-bold leading-tight text-white mb-[8px]">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] md:text-[18px] text-[#a09cbb] leading-[1.6]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );

                    return isExternal ? (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            {content}
                        </a>
                    ) : (
                        <Link key={item.title} href={item.link} className="w-full">
                            {content}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
