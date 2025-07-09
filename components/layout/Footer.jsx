export default function Footer() {
    return (
        <footer className="via-[#ff31dc] to-[#31fbff] relative bottom-0 w-full left-0 py-8">
            <div className="container mx-auto flex  flex-col xl:flex-row xl:justify-between xl:items-center px-6 md:px-16">
                <div className="profile-links flex  items-center items-center">
                    <b className="mr-4 text-lg text-primary">Find me at:</b>
                    <a
                        className="text-white text-lg mr-4  hover:text-yellow-400 hover:border-yellow-400"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/coder618/"
                        target="_blank"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </a>
                    <a
                        className="text-white text-lg mr-4  hover:text-yellow-400 hover:border-yellow-400"
                        rel="noreferrer"
                        href="https://stackoverflow.com/users/5772198/coder618"
                        target="_blank"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                            <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
                        </svg>
                    </a>
                    <a
                        className="text-white text-lg mr-4  hover:text-yellow-400 hover:border-yellow-400"
                        rel="noreferrer"
                        href="https://profiles.wordpress.org/coder618/"
                        target="_blank"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.youtube.com/@HappyCoding101"
                        target="_blank"
                        className="mr-[20px]"
                    >
                        <img src="/youtube.svg" alt="youtube icon" className="h-[40px] w-auto" />
                    </a>
                </div>
                {/* Contact Links */}
                <div className="contact-links flex  flex-row items-start mt-4 md:mt-0 ">
                    <b className="mr-4 text-lg text-primary">Contact me:</b>

                    <div className="links flex flex-row items-start md:items-center">
                        <a
                            className=" text-lg  mr-4 "
                            rel="noreferrer"
                            href="https://api.whatsapp.com/send?phone=+8801624217742"
                        >
                            WhatsApp
                        </a>
                        <a className=" text-lg" rel="noreferrer" href="mailto:iamahadul@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
