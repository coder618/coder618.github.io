import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <main>
                <div className="top-bar"></div>
                <div className="left-bar"></div>
                <div className="right-bar"></div>
                <div className="bottom-bar"></div>
                <div className="error-page main-body-content">
                    <div className="error-page-content">
                        <h1>Oops! Something is wrong</h1>
                        <div className="alert alert-danger">
                            Status: {error.statusText || error.message}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
