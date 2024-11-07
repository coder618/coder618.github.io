import ProjectBanner from "@/components/ProjectBanner";

export default function () {
    const projectData = {
        title: "Weather Feed",
        imgUrl: "/images/weather-app.png",
        platforms: [
            {
                title: "coder618/weather-feed",
                link: "https://github.com/coder618/weather-feed",
                type: "github",
            },
            {
                title: "https://weather-618.web.app",
                link: "https://weather-618.web.app/",
                type: "website",
            },
        ],
    };
    return (
        <>
            <div className="single-project-page px-4">
                <ProjectBanner data={projectData} />
                <div className="project-detail max-w-[800px] mx-auto mt-[40px] ">
                    <h2 className="text-[30px] font-bold">Welcome to Weather Feed!</h2>

                    <p>
                        Its a seamless and intuitive platform that keeps you informed about the
                        weather conditions in real-time and helps you plan for the next five days.
                        Here's what you can expect from this application:
                    </p>
                    <h3 className="highlight">Technologies Utilized:</h3>
                    <ul>
                        <li>
                            <b>React.js: </b> In this application I use react.js library for
                            front-end implementation.
                        </li>
                        <li>
                            <b>SCSS: </b>Utilized for efficient and maintainable styling, enabling a
                            visually appealing and responsive design.
                        </li>
                        <li>
                            <b>Google Firebase Cloud Functions: </b>Seamlessly integrating backend
                            functionalities, ensuring a reliable and responsive application. And
                            hide API key
                        </li>
                        <li>
                            <b>OpenWeather API: </b>Leveraging real-time weather data from
                            OpenWeather API, providing accurate and up-to-date information.
                        </li>
                    </ul>
                    <h3 className="highlight">App Features: </h3>
                    <ul>
                        <li>
                            <b>Location-Based Weather: </b> Automatically fetches your current
                            location or device location and provides up-to-date weather data for
                            your area.
                        </li>
                        <li>
                            <b>5-Day Forecast: </b>Plan your week ahead with a detailed 5-day
                            weather forecast, enabling you to make informed decisions about your
                            activities.
                        </li>
                        <li>
                            <b>Adaptive Theme: </b>The app intelligently adjusts its appearance
                            based on your device's light or dark mode, ensuring a pleasant user
                            experience regardless of the time of day.
                        </li>
                    </ul>

                    <div className="live-preview-link ">
                        Live preview available at <br />
                        <div className="link-with-arrow">
                            <img src={`/images/link-arrow.svg`} alt="arrow icon" />

                            <a target="_blank" href="https://weather-618.web.app/">
                                https://weather-618.web.app/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
