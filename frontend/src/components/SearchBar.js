import React, { useEffect, useState } from "react"
import axios from "axios"
import TitlesDataService from "../services/titles"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
// -*- Styles -*- \\
import "../css/Searchbar.css"

const SearchBar = () => {
	//use state to store search and names
	const [searchTerm, setSearchTerm] = useState("")
	const [results, setResults] = useState([])
	const [totalTitles, setTotalTitles] = useState([])

	// Tell react the component needs to do something after Rendering
	useEffect(() => {
		retrieveResults()
	}, [])

	const retrieveResults = () => {
		TitlesDataService.getAll()
			.then(response => {
				console.log(response.data)
				setResults(response.data.titles)
				setTotalTitles(response.data.totalTitles)
			})
			.catch(e => {
				console.log(e)
			})
	}

	return (
		<div className={"searchbar-container"}>
			<form action="/" method="get">
				<input
					className={"searchbar-form-field"}
					value={searchTerm}
					type="text"
					placeholder="Show name"
					onChange={e => setSearchTerm(e.target.value)}
				></input>
			</form>
			<div className={"search-pop"}>
				<div className={"search-pop-list"}>
					{searchTerm &&
						results
							.filter(result => result.title.toLowerCase().includes(searchTerm))
							.map(res => (
								// create a card with title and image
								<Link to={`/result/${res.imdbID}`} key={res.imdbID}>
									<div
										className={"search-pop-list-item d-flex align-items-center"}
										style={{ padding: "10px" }}
									>
										{/* <div className={"search-pop-list-item-anime-poster"}> */}
										<img
											className="anime-poster-img"
											variant="top"
											src={res.image}
											style={{ paddingRight: "0.5rem" }}
										/>
										{/* </div> */}
										<h3 className="anime-name">
											<Link to={`/result/${res.imdbID}`}>{res.title}</Link>
										</h3>
									</div>
								</Link>
							))}
				</div>
			</div>
		</div>
	)
}

export default SearchBar

/*
className="searchbar-cards"
style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, max(200px)",
    gap: "1rem",
    alignItems: "flex-start",
}}
 */
