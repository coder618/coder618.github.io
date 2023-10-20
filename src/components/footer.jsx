function Footer() {
    return (
        <footer>
            <div className="links-section">
                <div className="profile-links">
                    <div className="title">Profile links :</div>

                    <a
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/coder618/"
                        target="_blank"
                    >
                        Linkedin
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://stackoverflow.com/users/5772198/coder618"
                        target="_blank"
                    >
                        StackOverflow
                    </a>

                    <a
                        rel="noreferrer"
                        href="https://profiles.wordpress.org/coder618/"
                        target="_blank"
                    >
                        WordPress
                    </a>
                </div>

                <div className="contact-links">
                    <div className="title">Contact with :</div>
                    <div className="links">
                        <a
                            rel="noreferrer"
                            href="https://api.whatsapp.com/send?phone=+8801624217742"
                        >
                            WhatsApp
                        </a>
                        <a rel="noreferrer" href="mailto:iamahadul@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
