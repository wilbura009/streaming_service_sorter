import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useEffect } from "react"
import TitlesDataService from "../services/titles"

// import CardItem from "./CardItem"
import Card from "react-bootstrap/Card";
import '../css/CardCollage.css';
import { Link } from "react-router-dom";


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
					<Card.Title>
						
						<Link to={"/result"}>{title.title}</Link>
					</Card.Title>
	              </Card.Body>
	            </Card>
	          ))}
	        </div>
	      </div>
	  );
	};
 
export default CardsDeck;
