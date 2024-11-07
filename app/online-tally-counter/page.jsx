import ProjectBanner from "@/components/ProjectBanner";
import LivePreviewLink from "@/components/LivePreviewLink";
export default function () {
    const projectData = {
        title: "Online Tally Counter",
        imgUrl: "/images/online-tally-counter.png",
        platforms: [
            {
                title: "online-tally-counter.web.app",
                link: "https://online-tally-counter.web.app/",
                type: "website",
            },
        ],
    };
    return (
        <>
            <div className="single-project-page px-4">
                <ProjectBanner data={projectData} />
                <div className="project-detail max-w-[800px] mx-auto mt-[40px] ">
                    <h2 className="text-[30px] font-bold">Welcome to Online Tally Counter!</h2>

                    <p>
                        Its a multilingual tally counter support multiple counter, support pwa
                        function in both mobile and windows 11 pc.
                    </p>
                    <h3 className="highlight">Technologies Utilized:</h3>
                    <ul>
                        <li>
                            <b>Next.js: </b> I use Next.js framework for this project, and generate
                            static site for better performance.
                        </li>
                        <li>
                            <b>React.js: </b> In this application I use react.js library for
                            front-end implementation.
                        </li>
                        <li>
                            <b>TailwindCss: </b>I use tailwind css for styling.
                        </li>
                    </ul>
                    <h3 className="highlight">App Features: </h3>
                    <ul>
                        <li>
                            <b>Support multiple counter: </b>You can add multiple counter and track
                            your count individually.
                        </li>
                        <li>
                            <b>Locally Store data: </b>You dont need to login to use this app, your
                            data will be stored locally in your browser memory.
                        </li>
                        <li>
                            <b>Multiple Theme: </b>This app support multiple theme, which you can
                            use to change the appearance of the UI.
                        </li>
                        <li>
                            <b>Multilingual: </b>This app support 10 language, currently support
                            English, French, Spanish, German, Portuguese, Russian, Chinese,
                            Japanese, Arabic, Bangla.
                        </li>
                    </ul>

                    <LivePreviewLink link={projectData.platforms[0].link} />
                </div>
            </div>
        </>
    );
}
