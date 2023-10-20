import { Outlet, Link, useLoaderData, Form, redirect } from "react-router-dom";
function ProjectCard(props) {
    console.log(props.data);

    let { title, img, shortDescription, slug, tags } = props.data;
    img = `${img}`;
    const link = `/${slug}`;
    return (
        <Link to={link} className="project-card">
            <div className="img-holder">
                <img src={img} />
            </div>
            <h3>{title}</h3>
            <p>{shortDescription}</p>

            <div className="tags">
                {tags.map((item) => {
                    return <span key={item}>{item}</span>;
                })}
            </div>
        </Link>
    );
}

export default ProjectCard;
