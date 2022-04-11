import React from "react"
import Navbar from "../components/Navbar"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import "../css/Result.css"
import { useLocation, useParams } from "react-router-dom"
import TitlesDataService from "../services/titles"
import { useState, useEffect } from "react"
import titles from "../services/titles"

//Create separate css and override
//Main container wont take a background color?

export default function Result(props) {
	const params = useParams()
	const test = useLocation()
	const imdbID = params.imdbID
	console.log(imdbID)

	const [title, setTitle] = useState(false)

	useEffect(() => {
		retrieveTitles()
	}, [])

	//NEED CALL TO DB GIVEN IMBD
	const retrieveTitles = () => {
		TitlesDataService.getAll()
			.then(response => {
				console.log(response.data)
				setTitle(response.data.titles.filter(title => title.imdbID === imdbID))
				//setTotalTitles(response.data.totalTitles)
			})
			.catch(e => {
				console.log(e)
			})
	}

	console.log(title)

	return (
		<>
			<div className="outer">
				<Navbar />
				<Container className={"main-container"}>
					<Row>
						<Col sm={5} className="">
							<Card>
								<Card.Img src={title && title[0].image} />
								<Card.Body>
									<Card.Title className="">Card title</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<h1 class="pad">{title && title[0].title}</h1>

							<div class="pad">
								<h5 class="" style={{ color: "#FFA500" }}>
									Watch now
								</h5>
								<Card className="border border-warning">
									<Card.Body
										className=""
										style={{ backgroundColor: "#2e3840" }}
									>
										<Card.Text>Cute Logos that link to provider</Card.Text>
									</Card.Body>
								</Card>
							</div>

							<div>
								<h5 class="" style={{ color: "#FFA500" }}>
									Synopsis
								</h5>
                                <h7>{title && title[0].description}</h7>
							</div>
						</Col>
						<Col sm={1} className="border-left"></Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
