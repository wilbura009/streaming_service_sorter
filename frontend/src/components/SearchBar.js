import React, {useEffect, useState} from "react";
import axios from "axios";
import TitlesDataService from "../services/titles";
import Card from "react-bootstrap/Card";

// -*- Styles -*- \\
import '../css/Searchbar.css';

const SearchBar = () => {
    //use state to store search and names
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])
    const [totalTitles, setTotalTitles] = useState([]);

    // Tell react the component needs to do something after Rendering
    useEffect(() => {
        retrieveResults()
    }, [])

    const retrieveResults = () => {
        TitlesDataService.getAll()
            .then(response => {
                console.log(response.data);
                setResults(response.data.titles);
                setTotalTitles(response.data.totalTitles);
            })
            .catch(e => {
                console.log(e);
            });
    };

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
            <div className={"searchbar-cards"}>
                {searchTerm && results
                    .filter(result => result.title.toLowerCase().includes(searchTerm))
                    .map(res => (
                        // create a card with title and image
                        <Card
                            key={res.imdbID}
                            className={"searchbar-card"}
                            style={{ width: "18rem" }}
                        >
                            <Card.Img variant="top" src={res.image} />
                            <Card.Body>
                                <Card.Title>{res.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default SearchBar;

/*
className="searchbar-cards"
style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, max(200px)",
    gap: "1rem",
    alignItems: "flex-start",
}}
 */
