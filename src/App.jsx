import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import ErrorPage from "./utils/errorPage";
import Root from "./layout/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Browse /> },
            { path: "search", element: <Search /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
