import { useState } from "react";
import * as React from "react";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import AdvanceImporter from "./routes/AdvanceImporter";
import FastChat from "./routes/FastChat";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeatherFeed from "./routes/WeatherFeed";
import StarCollector from "./routes/StarCollector";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/weather-feed",
                element: <WeatherFeed />,
            },
            {
                path: "/fast-chat",
                element: <FastChat />,
            },
            {
                path: "/star-collector",
                element: <StarCollector />,
            },
            {
                path: "/advance-importer",
                element: <AdvanceImporter />,
            },
        ],
    },
]);
function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
