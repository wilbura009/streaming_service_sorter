import React from "react"
import Navbar from "../components/Navbar"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import "../css/Result.css"
import { useLocation, useParams } from "react-router-dom"
import TitlesDataService from "../services/titles"
import { useState, useEffect } from "react"
import titles from "../services/titles"
import { Link } from "react-router-dom"
import YoutubeEmbed from "./YoutubeEmbed"



//Create separate css and override
//Main container wont take a background color?

export default function Result( props ) {

    // refresh the list whenver a new parameter is sent

    const params = useParams();
    const test = useLocation();
    const imdbID = params.imdbID;
    console.log(imdbID);

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


    console.log(title);

	return (
		<>
			<div className="outer">
				<Navbar />
				<Container className={"main-container"}>
					<Row>
						<Col sm={5} className="">
							<Card>
								<Card.Img src={title.image} />
								<Card.Body>
									<Card.Title className="">{title.title}</Card.Title>
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
										style={{ backgroundColor: "#2e3840" }}
									>
										<Card.Text>
                                            <a href={"" + title.link}>
                                        {title.streamName}</a></Card.Text>
									</Card.Body>
								</Card>
							</div>
                            <YoutubeEmbed embedId={"" + title.video} />
							<div>
								<h5 class="" style={{ color: "#FFA500" }}>
									Synopsis
								</h5>
                                <h7>{title.description}</h7>
							</div>
						</Col>
						<Col sm={1} className="border-left"></Col>
					</Row>
				</Container>
			</div>
		</>
	)
}