import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { getCountries } from './../../Redux/actions/index';
import s from './Home.module.scss'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

import Pagination from '../Pagination/Pagination';
import Filter from '../Filters/Filter';
import Order from '../order/Order';
const Home = () => {
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
}
  const dispatch = useDispatch()

    const allCountries = useSelector((state) => state.countries)

    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //La pagina empieza en la 1
    const [countriesPerPage, setCountriesPerPage] = useState(10) //La pagina tiene 10 x Pagina
    const indexOfLastCountry = currentPage * countriesPerPage // ultimo countri en 10 (1 x 10)
    const indexOfFirstCountry =  indexOfLastCountry - countriesPerPage //// primer countri en 0 (10 - 10)
  
    const currentCountry = Array.isArray(allCountries) && allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    const changePage =(pageNumber) => {
        setCurrentPage(pageNumber)
        pageNumber>=2 ? setCountriesPerPage(10): setCountriesPerPage(9)
    }
console.log(currentCountry.name)
    useEffect(() => {
      dispatch(getCountries())
  },[dispatch])
  useEffect(() => {
    changePage(currentPage)
  },[currentPage])
  
  return (
    <div>
    <NavBar setCurrentPage={setCurrentPage} setOrden={setOrden}/>
  
    <div>
    </div>
    <div className={s.home}>
      <div className={s.sectionFilters}>
      <Filter/>
      </div>
      <div className={s.sectionCards}>
      <Cards countries={currentCountry}/>
      </div>
    </div>
    <div>
    
    </div>
   <div>
   <Pagination countriesPerPage={countriesPerPage} allCountries={allCountries.length} pagination={pagination}/>
   </div>
  <Footer/>
    </div>
  )
}

export default Home
