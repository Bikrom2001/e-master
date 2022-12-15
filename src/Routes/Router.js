import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/db',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;