function ProductBanner(props) {
    const data = props.data;
    const img = "/img/" + data.img;
    const github_logo = "/img/github.png";
    const wordpress_logo = "/img/wordpress-logo.png";

    const WordpressURL = "https://wordpress.org/plugin/" + data.slug;
    const gitHubURL = "https://github.com/coder618/" + data.slug;

    return (
        <div className="product-banner">
            <div className="title-wrapper">
                <h1>{data.title}</h1>

                <ul>
                    <li>
                        <a
                            title="GitHub repository"
                            href={gitHubURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                <img src={github_logo} />
                            </span>
                            coder618/advance-importer
                        </a>
                    </li>

                    <li>
                        <a
                            title="WordPress repository"
                            href={WordpressURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                <img src={wordpress_logo} />
                            </span>
                            coder618/advance-importer
                        </a>
                    </li>
                </ul>
            </div>

            <div className="img-wrapper">
                <img src={img} alt={data.title} />
            </div>
        </div>
    );
}

export default ProductBanner;
