import { createBrowserRouter } from "react-router-dom";
import BookMarks from "../components/BookMarks";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookmarks',
                element: <BookMarks></BookMarks>
            },
            
        ]
    }
])

export default router;