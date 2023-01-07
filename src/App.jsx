import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";
import { RootLayout } from "./layouts";
import { About, Home } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={ <RootLayout/> }>
			<Route index element={ <Home/> }/>
			<Route path="/about" element={ <About/> }/>
		</Route>
	)
)

function App() {
	return (
		<RouterProvider router={ router }/>
	);
}

export default App
