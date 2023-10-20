import { useEffect } from "react";
import ProjectBanner from "../components/ProjectBanner";
function FastChat() {
    useEffect(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const projectData = {
        title: "Fast Chat",
        imgUrl: "img/chat-app.png",
        platforms: [
            {
                title: "coder618/fastchat-backend",
                link: "https://github.com/coder618/fastchat-backend",
                type: "github",
            },
            {
                title: "https://chat-618.web.app",
                link: "https://chat-618.web.app/",
                type: "website",
            },
        ],
    };

    return (
        <>
            <div className="single-project-page ">
                <ProjectBanner data={projectData} />
                <div className="project-detail">
                    <h2>Welcome to FastChat!</h2>
                    <h3 className="lead">
                        Experience seamless real-time communication with other users through our
                        advanced chat application. Connect with friends, colleagues, or like-minded
                        individuals in separate rooms, keeping your conversations organized and
                        meaningful. Never miss a beat with our chat history feature that allows you
                        to revisit and reference past discussions.
                    </h3>
                    <h3>App Features: </h3>
                    <ul>
                        <li>
                            <b>Real-time Chat: </b> Engage in dynamic conversations with other users
                            in real time, fostering instant and interactive communication.
                        </li>

                        <li>
                            <b>Separate Rooms: </b> Join distinct chat rooms based on your
                            interests, projects, or discussions, ensuring focused and relevant
                            interactions.
                        </li>
                        <li>
                            <b>Chat History: </b>
                            Easily access and review your chat history to recall important details,
                            references, or ideas from previous conversations.
                        </li>
                    </ul>
                    <h3>Powered by Cutting-edge Technologies:</h3>
                    <ul>
                        <li>
                            <b>Node.js: </b>This website has separate front-end and backend, This
                            Application use Node.js for Backend
                        </li>
                        <li>
                            <b>React.js: </b> In this application I use react.js library for
                            front-end implementation.
                        </li>

                        <li>
                            <b>SCSS: </b>Utilized for efficient and maintainable styling, enabling a
                            visually appealing and responsive design.
                        </li>

                        <li>
                            <b>MongoDB: </b>Utilizing MongoDB as our database solution to store and
                            manage user data and chat information securely.
                        </li>
                        <li>
                            <b>Socket.io: </b>Implementing Socket.io to establish a reliable and
                            efficient real-time communication channel between users.
                        </li>
                    </ul>

                    <p>
                        Visit the Live Application: <br />
                        <a target="_blank" href="https://chat-618.web.app/">
                            https://chat-618.web.app/
                        </a>{" "}
                        <br /> Please note: Because I hosted this app in Free Node.js Server, It
                        will take some time for first boot-up (around 30-60s){" "}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FastChat;
