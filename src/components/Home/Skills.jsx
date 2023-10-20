function Skills() {
    const certificate_svg = "img/certificate.svg";

    const frontEndItems = [
        {
            title: "React JS",
            link: "https://www.linkedin.com/learning/certificates/1decb148da699eaa676f4a4920fa41825618f8e2abccd561fb4868608d1d8dce",
        },
        {
            title: "Typescript",
            link: "https://www.linkedin.com/learning/certificates/cc256e39086f894a10e08cfa120d19c4e49e401b9e1075b9d8f31a96037416af",
        },
        {
            title: "NextJS",
            link: "https://www.linkedin.com/learning/certificates/cef3a7bee2b620e19a21446597fe70b9590e69cc1c53e755538e242f7b9c8bf9",
        },
        {
            title: "HTML, CSS, SCSS",
            link: "https://www.coursera.org/account/accomplishments/certificate/E8HSM63L8AXH",
        },

        {
            title: "Tailwind CSS, Bootstrap CSS",
            link: " ",
        },

        {
            title: "Experience in modern tools like: Figma, Zeplin",
            link: " ",
        },
        {
            title: "Custom Design Development",
            link: " ",
        },
        {
            title: "Pixel-Perfect Front-End Conversion",
            link: " ",
        },
    ];

    const backEndItems = [
        {
            title: "Node JS",
            link: "https://www.linkedin.com/learning/certificates/0140b1d3f811559df59065f72a48209d5e4c0cc60d29a7bc86abf0dbde993560",
        },
        {
            title: "PHP",
            link: "",
        },
        {
            title: "ExpressJS",
            link: "https://www.linkedin.com/learning/certificates/011d0584838aa4f53aac7da9e3bdb1aa125978f92a19b82411ecad8d1a3cc6b7",
        },
        {
            title: "Git",
            link: "",
        },

        {
            title: "Serverless Computing / Google Cloud Function",
            link: " ",
        },
        {
            title: "GraphQL and Rest API Experience",
            link: "",
        },
        {
            title: "WordPress Theme & Plugin development",
            link: "https://profiles.wordpress.org/coder618/",
        },
        {
            title: "WooCommerce Development",
            link: "https://profiles.wordpress.org/coder618/",
        },
        {
            title: "Microservices with NodeJS",
            link: "",
        },
        {
            title: "MongoDB",
            link: "https://www.linkedin.com/learning/certificates/1c82ecbe35e345d37ab62cfab291c846951500bc10205eb86a75a139b92130ed",
        },
    ];

    return (
        <div className="skill-section">
            <div className="container">
                <hr />
                <div className="content">
                    <div className="title-wrapper">
                        <h2>Skills</h2>

                        <p>
                            Click
                            <span>
                                <img
                                    alt="verify icon"
                                    src={certificate_svg}
                                    width="20"
                                    height="20"
                                />
                            </span>
                            item to verify the Certificate
                        </p>
                    </div>

                    <div className="left-part">
                        <h3>Front-end Skills</h3>
                        <ul>
                            {frontEndItems.map((item) => {
                                return item.link.trim().length ? (
                                    <li key={item.title.replace(/\n|\r/g, "")}>
                                        <a rel="noreferrer" target="_blank" href={item.link}>
                                            {item.title}{" "}
                                            <img
                                                alt="verify icon"
                                                src={certificate_svg}
                                                width="20"
                                                height="20"
                                            />
                                        </a>
                                    </li>
                                ) : (
                                    <li key={item.title.replace(/\n|\r/g, "")}>{item.title} </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="right-part">
                        <h3>Back-end Skills</h3>
                        <ul>
                            {backEndItems.map((item) => {
                                return item.link.trim().length ? (
                                    <li key={item.title.replace(/\n|\r/g, "")}>
                                        <a rel="noreferrer" target="_blank" href={item.link}>
                                            {item.title}{" "}
                                            <img
                                                alt="verify icon"
                                                src={certificate_svg}
                                                width="20"
                                                height="20"
                                            />
                                        </a>
                                    </li>
                                ) : (
                                    <li key={item.title.replace(/\n|\r/g, "")}>{item.title} </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <hr />
            </div>
        </div>
    );
}

export default Skills;
