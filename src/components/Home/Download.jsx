function Download() {
    const resumeLink = "ahadul-islam-resume.pdf";
    return (
        <div className="download">
            <div className="container">
                <p>
                    If you are here for know more about me, you can download my resume from the link
                    below:
                </p>
                <a
                    title="download resume"
                    role="link"
                    className="btn btn-primary"
                    href={resumeLink}
                    download
                >
                    Download resume
                </a>
            </div>
        </div>
    );
}

export default Download;
