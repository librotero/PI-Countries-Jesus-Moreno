import React from 'react'
import Card from './Card'
import s from './Card.module.scss'

const Cards = ({countries}) => {
  return (
    <div>
    <ul className={s.cards}>
    {countries.length > 0 &&
      countries.map((c, idx) => (
        <Card
          key={idx}
          idx={idx}
          img={c.flags}
          id={c.id}
          name={c.name}
          continent={c.continents}
        />
      ))}
  </ul>
    </div>
  )
}

export default Cards
