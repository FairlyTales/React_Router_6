import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts";
import { About, Home } from "./pages";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <RootLayout/>,
			children: [
				{
					path: "/",
					element: <Home/>,
				},
				{
					path: "/about",
					element: <About/>,
				},
			]
		}
	]
)

function App() {
	return (
		<RouterProvider router={ router }/>
	);
}

export default App
