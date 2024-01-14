import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Lessons from "../pages/Lessons";
import Subjects from "../pages/Subjects";

let logged = true;

export const route = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/lessons",
		element: <Lessons />,
	},
	{
		path: "/subjects",
		element: <Subjects />,
	},
]);
