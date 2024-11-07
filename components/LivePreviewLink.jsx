export default function (props) {
    return (
        <div className="border-2 border-secondary my-15 px-6 py-4 rounded-[20px] mt-10 text-lg ">
            Live preview available at
            <br />
            <div className="mt-4 flex items-center">
                <img src="/images/link-arrow.svg" alt="arrow icon" />

                <a className="ml-[8px] text-white" target="_blank" href={`${props.link}`}>
                    {props.link}
                </a>
            </div>
        </div>
    );
}
