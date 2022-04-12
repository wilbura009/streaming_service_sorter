import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import TitlesDataService from "../services/titles"

// import CardItem from "./CardItem"
import Card from "react-bootstrap/Card"
import "../css/CardCollage.css"
import { Link } from "react-router-dom"

const CardsDeck = props => {
	const [titles, setTitles] = useState([])
	const [search, setSearch] = useState("")
	const [totalTitles, setTotalTitles] = useState([])

	// Tell react the component should re-render when the search state changes
	useEffect(() => {
		retrieveTitles()
	}, [])

	const retrieveTitles = () => {
		TitlesDataService.getAll()
			.then(response => {
				console.log(response.data)
				setTitles(response.data.titles)
				setTotalTitles(response.data.totalTitles)
			})
			.catch(e => {
				console.log(e)
			})
	}

	const handleSearch = event => {
		const search = event.target.value
		setSearch(search)
	}

	const refreshList = () => {
		retrieveTitles()
	}

	const test = "test"

	return (
		<div className="cards__container">
			<h1>Check out these AWESOME shows!</h1>
			{/* <SearchBar onSearch={handleSearch} /> */}
			<div
				className="cards__wrapper"
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
					gap: "2rem",
					alignItems: "flex-start",
				}}
			>
				{titles.map(title => (
					<Card key={title.imdbID} className="card">
						<Card.Img variant="top" src={title.image} />
					</Card>
				))}
			</div>
		</div>
	)
}

export default CardsDeck
