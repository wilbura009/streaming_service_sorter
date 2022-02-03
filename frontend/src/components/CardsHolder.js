//import CardItem from './CardItem';
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import {Card} from 'react-bootstrap';
import axios from "axios"

// ** STYLES ** \\
import '../css/Cards.css';

// ** Collage ** \\
import collage from '../img/collage.png'

var a = 154;

const CardsHolder = props => {

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
                service: 'netflix',
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
        <div className='cards'>
            <h1>Check out these AWESOME shows!</h1>
            <div className='cards__container'>
                <img className={'img__collage'} src={collage} alt={"collage"}></img>
            </div>
        </div>
    )
        {/*
        <div className='cards'>
          <h1>Check out these AWESOME shows!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
              {results.map(result => <Card>{
            <div>
                <img
              className='cards__item__pic-wrap'
              alt='poster'
              src={result.posterURLs.original}
                />
            </div>
            }</Card>)} 
            </ul>
            </div>
          </div>
        </div>
      )
      */}
};

export default CardsHolder;
