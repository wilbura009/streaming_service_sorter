import React from "react"
import Navbar from "../components/Navbar"
import { Button, Card, Col, Container, Image, Row, Tile } from "react-bootstrap"
import "../css/Result.css"
import { useLocation, useParams } from "react-router-dom"
import TitlesDataService from "../services/titles"
import { useState, useEffect } from "react"
import titles from "../services/titles"
import { Link } from "react-router-dom"
import YoutubeEmbed from "./YoutubeEmbed"
import Footer from "./Footer"
import Icon from "./Icon"

//Create separate css and override
//Main container wont take a background color?

export default function Result(props) {
	// refresh the list whenver a new parameter is sent

	const params = useParams()
	const test = useLocation()
	const imdbID = params.imdbID
	console.log(imdbID)

	const [title, setTitle] = useState([])

	useEffect(() => {
		retrieveTitles()
	}, [imdbID])

	//NEED CALL TO DB GIVEN IMBD
	const retrieveTitles = () => {
		TitlesDataService.get(imdbID)
			.then(response => {
				console.log(response.data)
				setTitle(response.data)
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
				<Container className={"main-container rounded"}>
					<Row>
						<Col sm={5} className="">
							<Card style={{ backgroundColor: "#2e3840" }}>
								<Card.Img src={title.image} />
								<Card.Body>
									<Card.Title
										className=""
										style={{ borderBottom: "1px solid #FFA500" }}
									></Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<h1 class="pad">{title.title}</h1>

							<div class="pad">
								<h5 class="" style={{ color: "#FFA500" }}>
									Watch now
								</h5>

								<Card className="border border-warning">
									<Card.Body
										className=""
										style={{ backgroundColor: "#2e3840", padding: "0.5rem 1rem" }}
									>
										<Card.Text className='d-flex'>
											<Icon streamName={title.streamName} link={title.link}></Icon>
										</Card.Text>
									</Card.Body>
								</Card>
							</div>

							<div class="pad">
								<YoutubeEmbed embedId={"" + title.video} />
							</div>

							<div>
								<h5 class="" style={{ color: "#FFA500" }}>
									Synopsis:
								</h5>
								<h6>{title.description}</h6>
							</div>
						</Col>
						<Col sm={1} className="border-left"></Col>
					</Row>
				</Container>
				<Footer></Footer>
			</div>
		</>
	)
}
