import ProjectBanner from "../components/ProjectBanner";
import { useEffect } from "react";

import { Link } from "react-router-dom";
function AdvanceImporter() {
    useEffect(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const projectData = {
        title: "Advance Importer",
        imgUrl: "img/advance-importer.png",
        platforms: [
            {
                title: "coder618/advance-importer",
                link: "https://github.com/coder618/advance-importer",
                type: "github",
            },
            {
                title: "wordpress.org/plugin/advance-importer",
                link: "https://wordpress.org/plugin/advance-importer",
                type: "wordpress",
            },
        ],
    };

    return (
        <>
            <div className="single-project-page ">
                <ProjectBanner data={projectData} />
                <div className="product-detail">
                    <p className="lead">
                        This plugin help you to import data from other wordpress website with all
                        Media and attachment's data.
                    </p>

                    <h2>Features:</h2>
                    <ul>
                        <li>You can import Post with any attachment,media, featured image</li>
                        <li>Custom Post Type support</li>
                        <li>You can Import ACF (Advanced Custom Fields) plugin meta data.</li>
                    </ul>

                    <h2>How to export</h2>
                    <ol>
                        <li>From WordPress Dashboard &#x003E; Tools &#x003E; Export</li>
                        <li>
                            Select what to export (Post type) and and
                            <b>Tick the checkbox “Export with attachment(s)”</b>
                        </li>
                        <li>It will generate a XML file, which will help you to Import data</li>
                    </ol>

                    <h2>How to import</h2>

                    <ol>
                        <li>
                            From WordPress Dashboard &#x003E; Tools &#x003E; Import &#x003E; Click
                            “Run Importer” under WordPress Importer
                        </li>
                        <li>Select exported the XML file and click Upload file and import</li>
                        <li>
                            Select &#x0022;Download and import file attachments &#x0022; and click
                            submit
                        </li>
                        <li>
                            Your download should start at this stage. Please note you may need to
                            wait until all the download process.
                        </li>
                    </ol>

                    <h2>How to export with only selected Attachments</h2>
                    <ol>
                        <li>
                            From WordPress Dashboard &#x003E; Settings &#x003E; Advance Importer
                        </li>
                        <li>Add the meta key list separate by comma</li>
                        <li>Click update/save information</li>

                        <li>
                            Follow above : <code>How to export</code> and <code>How to import</code>{" "}
                            Steps to Import <code>Posts</code> with only selected Attachments
                        </li>
                    </ol>
                    <p>
                        This step will help you to import Attachments form selected meta field(s)
                        only.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AdvanceImporter;
