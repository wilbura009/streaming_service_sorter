//import CardItem from './CardItem';
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import {Card} from 'react-bootstrap';
import axios from "axios"

// ** STYLES ** \\
import '../css/Cards.css';

// ** Collage ** \\
import collage from '../img/collage.png'

const CardsHolder = props => {
    return (
        <div className='cards'>
            <h1>Check out these AWESOME shows!</h1>
            <div className='cards__container'>
                <img className={'img__collage'} src={collage} alt={"collage"}></img>
            </div>
        </div>
    )
};

export default CardsHolder;
