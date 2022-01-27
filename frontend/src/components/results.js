import React, { useState, useEffect } from "react";
// import { ResultBody } from "./result-body";
import styled from 'styled-components';
import "./result.css";

import axios from "axios"

const Header = styled.div` // 
  height: 100px;
  width: 100%;
  background: #fff;
  display: flex; // 2
  justify-content: center; 
`;
const Container = styled.div`
  background: black;
  display: flex;
  justify-content: center; // 1
  flex-flow: row wrap; // 2
  width: 100%;
  height: 100%;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: column wrap; // 4
`;

const Card = styled.div`
  font-size: small;
  margin: 20px;
  background: #fff;
  height: 300px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;


const Results = props => {

    const [results, setResults] = useState([]);

    // Tell react the component needs to do something after Rendering
    useEffect(() => {
        retrieveResults();
    }, []);

    const retrieveResults = () => {
        let config = {
            headers: {
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
                'X-RapidAPI-Key': 'b5503a63eamsh2188c191ff68272p15245ejsnb138aa27d288'
            },
            params: {
                country: 'us',
                service: 'hbo',
                type: 'series',
            },
        }
    
        axios.get('https://streaming-availability.p.rapidapi.com/search/basic', config)
            .then(response => {
                setResults(response.data.results)
                //console.log(results)
            })
    };
    console.log(results);

    return (

    <Container>
     <List>
        {results.map((result) => <Card>{
            <div>
                <p>{result.title}</p>
            </div>
            }</Card>)} 
        </List>   
    </Container>

    );
        
};
export default Results;