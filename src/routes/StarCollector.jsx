import { useEffect } from "react";
import ProjectBanner from "../components/ProjectBanner";
function StarCollector() {
    useEffect(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const projectData = {
        title: "Star Collector",
        imgUrl: "img/star-collector.png",
        platforms: [
            {
                title: "coder618/star-collector",
                link: "https://github.com/coder618/star-collector",
                type: "github",
            },
            {
                title: "https://game-618.web.app/",
                link: "https://game-618.web.app//",
                type: "website",
            },
        ],
    };

    return (
        <>
            <div className="single-project-page ">
                <ProjectBanner data={projectData} />
                <div className="project-detail">
                    <h2>Welcome to Star Collector!</h2>
                    <p>
                        A simple JavaScript game made using phaser.js, which a very popular gaming
                        library for Javascript game developer.
                    </p>
                    <p>Very easy to play, you just need to collect star to score more</p>
                    <p>Game will getting more complete as soon as you finish all the starts</p>

                    <h3>Technologies Utilized:</h3>
                    <ul>
                        <li>
                            <b>JavaScript </b>
                        </li>
                        <li>
                            <b>phaser.js </b>
                        </li>
                        <li>
                            <b>Google Firebase for hosting </b>
                        </li>
                    </ul>

                    <h3>
                        Check it out live:{" "}
                        <a href="https://game-618.web.app/" target="_blank">
                            game-618.web.app/
                        </a>
                    </h3>
                </div>
            </div>
        </>
    );
}

export default StarCollector;
