import React from "react"
import Navbar from "./components/Navbar"
//import './App.css';
import Home from "./pages/Home"
import SearchBar from "./components/SearchBar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Result from "./components/Result"
import AboutUs from "./components/AboutUs"
import ScrollToTop from "./components/ScrollToTop"

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/titles" element={<Home />} />
						<Route path="/result/:imdbID" element={<Result />} />
						<Route path="/about" element={<AboutUs />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</>
	)
}
export default App
