import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

function App() {
	return (
		<div className="dark">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
