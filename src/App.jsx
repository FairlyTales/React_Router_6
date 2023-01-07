import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { About, Home } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<header>
				<nav>
					<h1>React Router</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route index element={ <Home/> }/>
					<Route path="/about" element={ <About/> }/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App
