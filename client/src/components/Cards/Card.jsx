import React from 'react'
import {Link} from 'react-router-dom'
import s from './Card.module.scss'

function Card({ idx, img, id, name, continent }) {
    return (
      <div className={s.card}>
        <div key={idx}>
          <div className={s.image}>
          <Link to={`/countries/${id}`}>
            <img
            alt="flag from country"
            src={img}
            width="240"/>
          </Link>
          </div>
          <h3>{name}</h3>
          <h5>{continent}</h5>
        </div>
      </div>
    );
  }

export default Card
