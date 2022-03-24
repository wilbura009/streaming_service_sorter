//import CardItem from './CardItem';
import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import {Card} from 'react-bootstrap';
import axios from "axios"

// ** STYLES ** \\
import '../css/CardCollage.css';

// ** Collage ** \\
import collage_img from '../img/collage.png'
import netflix_img from '../img/netflix.png'
import hulu_img from '../img/hulu.png'

const CardCollage = props => {
        return (
        <div className='cards__container'>
            <h1>Check out these AWESOME shows!</h1>
            <img className={'img__collage'} src={collage_img} alt={"collage"}></img>
        </div>
    )
};

export default CardCollage;
