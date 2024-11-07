export default function Skills() {
    const items = [
        {
            title: "Frontend Development",
            description:
                "Proficient in modern frontend technologies, including React, Tailwind CSS, HTML5, and CSS3. Skilled in building responsive, user-friendly interfaces with a focus on performance and accessibility.",
            image: "/logos/javascript-logo.png",
        },
        {
            title: "Backend Development",
            description:
                "Strong background in backend development with PHP, Node.js, and Laravel. Extensive experience in database management, RESTful APIs, and secure, scalable architectures.",
            image: "/logos/php-logo.png",
        },
        {
            title: "Custom WordPress Development",
            description:
                "Experienced in creating custom WordPress themes, plugins, and tailored solutions. Skilled at optimizing performance, implementing custom APIs, and enhancing SEO.",
            image: "/wordpress.png",
        },
        {
            title: "Fullstack Development",
            description:
                "Versatile in fullstack development using Laravel, Next.js, and various JavaScript frameworks. Experienced in both server-side and client-side development, as well as integrating complex backend systems with dynamic frontends.",
            image: "/fullstack.webp", // update with the correct path to an appropriate image
        },
    ];

    return (
        <>
            <div className="relative xl:py-[100px] px-4  py-[60px]">
                <div className="text-center z-10">
                    <h2 className="text-[30px] xl:text-[60px] font-bold leading-tight text-white text-shadow xl:mb-[80px] mb-[40px] ">
                        My area of expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[540px_540px]  xl:gap-[30px]  gap-[20px] place-items-center  justify-center">
                    {items.map((items) => {
                        return (
                            <div className="max-w-[540px] border border-[#2b415c] bg-[#211e39] xl:p-[40px] p-[20px] rounded-[20px]  flex flex-col xl:flex-row items-start transition-transform transform ease-out hover:scale-[1.03] hover:rotate-[1deg] hover:border-primary ">
                                <img
                                    src={items.image}
                                    alt="wordpress logo"
                                    className="w-[130px] h-auto mr-[20px] mb-[15px] "
                                />
                                <div className="text-left">
                                    <h3 className="text-[26px] font-bold leading-tight mb-[8px] text-white">
                                        {items.title}
                                    </h3>
                                    <p className="text-[18px] text-[#a09cbb] leading-[1.6]">
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
