import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import { Layout } from "./components/Layout";

//screens
import { Clients } from "./screens/Clients";
import { CreateClient } from "./screens/CreateClient";
import { DashBoard } from "./screens/Dashboard";
import { Tracking } from "./screens/Tracking";
import { Vehicles } from "./screens/Vehicles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <DashBoard />,
            },
            {
                path: "clients",
                element: <Clients />,
            },
            {
                path: "create-client",
                element: <CreateClient />,
            },
            {
                path: "vehicles",
                element: <Vehicles />,
            },
            {
                path: "Tracking",
                element: <Tracking />,
            },
            {
                path: "",
                element: <div>Dash</div>,
            },
        ],
    },
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export { Routes };
