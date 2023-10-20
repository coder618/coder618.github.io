import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function Root() {
    return (
        <>
            <main>
                <div className="bg-borders">
                    <div className="top-bar"></div>
                    <div className="left-bar"></div>
                    <div className="right-bar"></div>
                    <div className="bottom-bar"></div>
                </div>

                <div className="main-body-content">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Root;
