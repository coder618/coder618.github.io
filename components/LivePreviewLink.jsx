export default function (props) {
    return (
        <div className="live-preview-link ">
            Live preview available at
            <br />
            <div className="link-with-arrow">
                <img src="/images/link-arrow.svg" alt="arrow icon" />

                <a target="_blank" href={`${props.link}`}>
                    {props.link}
                </a>
            </div>
        </div>
    );
}
