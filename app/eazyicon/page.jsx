import ProjectBanner from "@/components/ProjectBanner";
import LivePreviewLink from "@/components/LivePreviewLink";
export default function () {
    const projectData = {
        title: "EazyIcon",
        imgUrl: "/images/eazyicon.png",
        platforms: [
            {
                title: "Eazyicon",
                link: "https://eazyicon.com/",
                type: "website",
            },
        ],
    };
    return (
        <>
            <div className="single-project-page px-4">
                <ProjectBanner data={projectData} />
                <div className="project-detail max-w-[800px] mx-auto mt-[40px] ">
                    <h2 className="text-[30px] font-bold">Welcome to EazyIcon!</h2>

                    <p>
                        Its a free icon website, where you can find free icons for your next
                        creative project.
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
                            <b>Customize Icon: </b>Download icon in your desired size and format and
                            custom color.
                        </li>
                        <li>
                            <b>5 Style Supported: </b>You can choose from 5 different styles of
                            icons.
                        </li>
                    </ul>

                    <LivePreviewLink link={projectData.platforms[0].link} />
                </div>
            </div>
        </>
    );
}
