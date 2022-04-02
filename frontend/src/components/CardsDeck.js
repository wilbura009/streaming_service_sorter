import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import TitlesDataService from "../services/titles"

// import CardItem from "./CardItem"
import Card from "react-bootstrap/Card";


const CardsDeck = props => {
	  const [titles, setTitles] = useState([]);
	  const [search, setSearch] = useState("");
	  const [totalTitles, setTotalTitles] = useState([]);

	  // Tell react the component should re-render when the search state changes
	  useEffect(() => {
		  retrieveTitles();
	  }, []);

	  const retrieveTitles = () => {
		  TitlesDataService.getAll()
			  .then(response => {
				  console.log(response.data);
				  setTitles(response.data.titles);
				  setTotalTitles(response.data.totalTitles);
			  })
			  .catch(e => {
				  console.log(e);
			  });
	  };

	  const handleSearch = event => {
	    const search = event.target.value;
	    setSearch(search);
	  };

	  const refreshList = () => {
		retrieveTitles();
	  };

	  return (
	    <Container>
	      <div className="cards__container">
	        <h1>Check out these AWESOME shows!</h1>
	        {/* <SearchBar onSearch={handleSearch} /> */}
	        <div className="cards__wrapper">
	          {titles.map(title => (
	            <Card
						              key={title.imdbID}
	              className="card"
	              style={{ width: "18rem" }}
	            >
	              <Card.Img variant="top" src={title.image} />
	              <Card.Body>
	              </Card.Body>
	            </Card>
	          ))}
	        </div>
	      </div>
	    </Container>
	  );
	};

// export default function CardsDeck() {
// 	//use state to store search and names 
// 	const [searchTerm, setSearchTerm] = useState("")
// 	const [results, setResults] = useState([])

// 	// Tell react the component needs to do something after Rendering
// 	useEffect(() => {
// 		retrieveResults()
// 	}, [])

// 	const retrieveResults = () => {
		
// 	}


// 		return (
// 		<Container className="my-4">
// 			<h1>What would you like to watch?</h1>
// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "center",
// 					alignItems: "center",
// 				}}
// 			>
// 				<input
// 					value={searchTerm}
// 					type="text"
// 					placeholder="Show name"
// 					onChange={e => setSearchTerm(e.target.value)}
// 				></input>
// 			</div>
// 			<div
// 				className="my-5"
// 				style={{
// 					display: "grid",
// 					gridTemplateColumns: "repeat(auto-fill, max(300px)",
// 					gap: "1rem",
// 					alignItems: "flex-start",
// 				}}
// 			>
// 				{searchTerm && results
// 					.filter(result => result.title.toLowerCase().includes(searchTerm))
// 					.map(res => (
// 						<CardItem title={res.title} image={res.posterURLs.original}></CardItem>
// 					))}
// 			</div>
// 		</Container>
// 	)
// }
 
export default CardsDeck;