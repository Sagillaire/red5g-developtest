import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { TablePage } from "../pages/table";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/table",
        element: <TablePage />,
    },
]);
