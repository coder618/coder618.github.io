import ProjectBanner from "@/components/ProjectBanner";

export default function () {
    const projectData = {
        title: "Advance Importer",
        imgUrl: "/images/advance-importer.png",
        platforms: [
            {
                title: "Advance Importer",
                link: "https://wordpress.org/plugins/advance-importer/",
                type: "wordpress",
            },
        ],
    };
    return (
        <>
            <div className="single-project-page px-4">
                <ProjectBanner data={projectData} />
                <div className="project-detail max-w-[800px] mx-auto mt-[40px] ">
                    <h2 className="text-[30px] font-bold">Welcome to Advance Importer!</h2>

                    <p>
                        A powerful plugin for import and export Post, Page, any Custom post type
                        data, with any kind of attachments.
                    </p>
                    <h3 className="highlight">Technologies Utilized:</h3>
                    <ul>
                        <li>
                            <b>Wordpress: </b> Its a wordpress plugin. built on top of wordpress
                            best practices.
                        </li>
                        <li>
                            <b>PHP: </b> This plugin is built with php.
                        </li>
                    </ul>
                    <h3 className="highlight">App Features: </h3>
                    <ul>
                        <li>
                            Import and Export with post/page/custom post type data with
                            attachment(s) media
                        </li>
                        <li>Support any attachment data type, eg. Image, PDF, Sound etc</li>
                        <li>
                            Support Gutenberg editor data Import, ACF plugin Attachment Data import
                            etc.
                        </li>
                    </ul>

                    <h2 className="highlight">How to export</h2>
                    <ol>
                        <li>From WordPress Dashboard &gt; Tools &gt; Export</li>
                        <li>
                            Select what to export (Post type) and and
                            <b>Tick the checkbox “Export with attachment(s)”</b>
                        </li>
                        <li>It will generate a XML file, which will help you to Import data</li>
                    </ol>
                    <h2 className="highlight">How to import</h2>
                    <ol>
                        <li>
                            From WordPress Dashboard &gt; Tools &gt; Import &gt; Click “Run
                            Importer” under WordPress Importer
                        </li>
                        <li>Select exported the XML file and click Upload file and import</li>
                        <li>Select "Download and import file attachments " and click submit</li>
                        <li>
                            Your download should start at this stage. Please note you may need to
                            wait until all the download process.
                        </li>
                    </ol>

                    <h2 className="highlight">How to export with only selected Attachments</h2>
                    <ol>
                        <li>From WordPress Dashboard &gt; Settings &gt; Advance Importer</li>
                        <li>Add the meta key list separate by comma</li>
                        <li>Click update/save information</li>
                        <li>
                            Follow above : <code>How to export</code> and <code>How to import</code>{" "}
                            Steps to Import <code>Posts</code> with only selected Attachments
                        </li>
                    </ol>

                    <div className="live-preview-link ">
                        Hosted on wordpress.org
                        <br />
                        <div className="link-with-arrow">
                            <img src={`images/link-arrow.svg`} alt="arrow icon" />
                            <a
                                target="_blank"
                                href="https://wordpress.org/plugins/advance-importer/"
                            >
                                https://wordpress.org/plugins/advance-importer/
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
