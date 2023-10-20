import ProjectCard from "./ProjectCard";

const ProjectsArray = [
    {
        title: "FastChat",
        img: "img/chat-app.png",
        slug: "fast-chat",
        tags: ["Node.js", "MongoDB", "Web Socket", "Socket.io", "React.js"],
        shortDescription:
            "A real time chatting application based on Node.js, Socket.io with chat history functionality",
    },
    {
        title: "Weather App",
        img: "img/weather-app.png",
        slug: "weather-feed",
        tags: ["React.js", "API", "Firebase"],
        shortDescription:
            "A weather web app based on React.js and OpenWeather API, with some cool features.",
    },
    {
        title: "Star Collector",
        img: "img/star-collector.png",
        slug: "star-collector",
        tags: ["Phaser.js", "Firebase Hosting"],
        shortDescription:
            "Its a Browser based game built with Phaser.js, and it currently hosted in Firebase.",
    },
    {
        title: "Advance Importer",
        img: "img/advance-importer.png",
        slug: "advance-importer",
        tags: ["WordPress", "Plugin", "Open Source"],
        shortDescription:
            "A WordPress Plugin to import and export post(s) with related Media and Attachments.",
    },
];

function Products(props) {
    const product_list = ProjectsArray;

    return (
        <section className="projects">
            <div className="container">
                <h2>Some experimental projects:</h2>

                <div className="items">
                    {product_list.map((item) => (
                        <ProjectCard data={item} key={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
