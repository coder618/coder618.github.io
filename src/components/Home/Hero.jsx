function Hero() {
    const yearCount = new Date().getFullYear() - 2017;
    const resumeLink = `ahadul-islam-resume.pdf`;
    return (
        <div className="hero-section">
            <div className="container">
                <div className="content">
                    <h1 className="d-none">Coder618</h1>
                    <h2>Welcome!</h2>
                    <p>Hi, thanks for visiting my website, I appreciate it!</p>

                    <p>
                        My name ia Ahadul Islam. <br />I am a self-taught Full Stack Web Developer
                        and Open Source Contributor, <br />I have <b>{yearCount}+</b> years of
                        professional experience in web development.
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
        </div>
    );
}

export default Hero;
