import { Link } from "react-router-dom";

function ProjectBanner({ data }) {
    const imgUrl = data.imgUrl;
    const title = data.title;
    const publishedPlatforms = data.platforms;

    console.log(publishedPlatforms);
    return (
        <>
            <Link to="/" className="back-btn" title="Back">
                <img src={`img/back.svg`} alt="back" />
                Back
            </Link>
            <div className="product-banner">
                <div className="title-wrapper">
                    <h1>{title}</h1>
                    <ul>
                        {publishedPlatforms.map((item) => {
                            return (
                                <li key={item.title}>
                                    <a
                                        title="GitHub repository"
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>
                                            <img src={`img/${item.type}.png`} />
                                        </span>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="img-wrapper">
                    <img src={imgUrl} alt={title} />
                </div>
            </div>
        </>
    );
}

export default ProjectBanner;
