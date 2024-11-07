// import { Link } from "react-router-dom";
import Link from "next/link";

function ProjectBanner({ data }) {
    const imgUrl = data.imgUrl;
    const title = data.title;
    const publishedPlatforms = data.platforms;

    return (
        <>
            <div className="product-banner mt-10">
                <div className="container">
                    <div className="title-wrapper">
                        <h1 className="xl:text-center mb-5 xl:text-[60px]  text-[40px] font-bold">
                            {title}
                        </h1>
                        <ul className="xl:flex justify-center mb-10">
                            {publishedPlatforms.map((item) => {
                                return (
                                    <li
                                        className="flex xl:justify-center items-center  xl:mr-10 mr-0 mb-5"
                                        key={item.title}
                                    >
                                        <span>
                                            <img
                                                className="w-[40px]"
                                                src={`/images/${item.type}.png`}
                                            />
                                        </span>
                                        <a
                                            title="GitHub repository"
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ml-2"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="img-wrapper">
                        <img className="w-[800px] max-w-[100%] mx-auto" src={imgUrl} alt={title} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectBanner;
