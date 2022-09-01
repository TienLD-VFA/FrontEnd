import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />

				<Route path="/login" element={<Auth authRoute="login" />} />
				<Route path="/register" element={<Auth authRoute="register" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
