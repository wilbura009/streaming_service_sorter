import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import axios from "axios"
import CardItem from "./CardItem"

export default function CardsDeck() {
	//use state to store search and names 
	const [searchTerm, setSearchTerm] = useState("")
	const [results, setResults] = useState([])

	// Tell react the component needs to do something after Rendering
	useEffect(() => {
		retrieveResults()
	}, [])

	const retrieveResults = () => {
		let config = {
			headers: {
				"X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
				"X-RapidAPI-Key": "b5503a63eamsh2188c191ff68272p15245ejsnb138aa27d288",
			},
			params: {
				country: "us",
				service: "netflix",
				type: "series",
			},
		}

		axios
			.get("https://streaming-availability.p.rapidapi.com/search/basic", config)
			.then(response => {
				setResults(response.data.results)
				//console.log(results)
			})
	}
	//console.log(results.filter(result => result.title.toLowerCase().includes(searchTerm)))

	//onChange, call to set searchTerm
	//Inside return, filter by searchTerm

	return (
		<Container className="my-4">
			<h1>What would you like to watch?</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<input
					value={searchTerm}
					type="text"
					placeholder="Show name"
					onChange={e => setSearchTerm(e.target.value)}
				></input>
			</div>
			<div
				className="my-5"
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, max(300px)",
					gap: "1rem",
					alignItems: "flex-start",
				}}
			>
				{searchTerm && results
					.filter(result => result.title.toLowerCase().includes(searchTerm))
					.map(res => (
						<CardItem title={res.title} image={res.posterURLs.original}></CardItem>
					))}
			</div>
		</Container>
	)
}
