import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { getCountries } from './../../Redux/actions/index';

const Home = () => {
  const dispatch = useDispatch()

    const allCountries = useSelector((state) => state.countries)

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //La pagina empieza en la 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) //La pagina tiene 10 x Pagina
    const indexOfLastCountry = currentPage * countriesPerPage // ultimo countri en 10 (1 x 10)
    const indexOfFirstCountry =  indexOfLastCountry - countriesPerPage //// primer countri en 0 (10 - 10)

    const currentCountry = Array.isArray(allCountries) && allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
console.log(currentCountry.name)
    useEffect(() => {
      dispatch(getCountries())
  },[dispatch])
  return (
    <div className="">
    <h2>Hola</h2>
      <Cards countries={currentCountry}/>
    </div>
  )
}

export default Home
