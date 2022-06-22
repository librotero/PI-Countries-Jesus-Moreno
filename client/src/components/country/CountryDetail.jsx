
import React from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getDetails } from "../../Redux/actions/index";
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import styles from './CountryDetail.module.scss'

function CountryDetail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getDetails(id));
      },[
        dispatch,
      ])

    const countryDetail = useSelector((state)=> state.detail);
    return (
        <div className={styles.container}>
        <div className={styles.nav}>
        <div className={styles.item}>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/home"
          >
            <button>Countries</button>
          </Link>
        </div>
        <div className={styles.item}>
          <Link style={{ "text-decoration": "none" }} to="/activities">
            <button>Activities</button>
          </Link>
        </div>
      </div>
        <h1>{countryDetail.name}</h1>
        <div className={styles.containerItem}>
        <div className={styles.itemImg}>
        <img src={countryDetail.flags} alt="flag from country" width="100%"/>
        </div>
        <div className={styles.item}>
        <h5>Capital: {countryDetail.capital}</h5>
        <h5>Subregion: {countryDetail.subregion}</h5>
        <h5>Poulation: {countryDetail.population}</h5>
        <h5>Area: {countryDetail.area}</h5>
        <h5>Id: {countryDetail.id}</h5>
        </div>
        </div>
        <div>
       <h1>Activities</h1>
      <div className={styles.activities}>
      {
        countryDetail.activities?
        countryDetail.activities.map((el,index)=>{
            return (
                <div className={styles.activity} key={index}>
                <h3>{el.name}</h3>
                <p>Dificultad: {el.dificultad}</p>
                <p>Teporada: {el.temporada}</p>

                </div>
            )
        }
        ):<div className={styles.activity}>No hay nada</div>
    }
      </div>
        </div>
        </div>
    );
}
export default CountryDetail;