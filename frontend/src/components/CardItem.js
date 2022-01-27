/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
            />
          </figure>
          <div className='cards__item__info'>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;