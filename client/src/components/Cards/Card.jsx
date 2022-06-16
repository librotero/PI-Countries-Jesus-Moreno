import React from 'react'
import {Link} from 'react-router-dom'
import s from './Card.module.scss'

function Card({ idx, img, id, name, continent }) {
    return (
      <div className={s.card}>
        <div key={idx}>
          <Link to={`/countries/${id}`}>
            <img
            alt="flag from country"
            src={img}
            width="250"/>
          </Link>
          <h2>{id}</h2>
          <h2>{name}</h2>
          <h2>{continent}</h2>
        </div>
      </div>
    );
  }

export default Card
