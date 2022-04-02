import React from "react"
import { Card } from "react-bootstrap"

export default function CardItem({ title}) {
	return (
		<Card>
			<Card.Body>
				{/* <img class="card-img-top" src={image} alt="Title image"></img> */}
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	)
}
