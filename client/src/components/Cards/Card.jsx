import React from 'react'
import {Link} from 'react-router-dom'
import s from './Card.module.scss'

function Card({ idx, img, id, name, continent }) {
    return (
      <div className={s.card}>
        <div key={idx}>
          <div className={s.image}>
            <div>
            <h3>{name}</h3>
            <p>{continent}</p>
            </div>
          <Link to={`/countries/${id}`}>
            <img
            alt="flag from country"
            src={img}
            className={s.desvanecer}
            width="240"/>
          </Link>
          </div>
        </div>
      </div>
    );
  }

export default Card
