import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getDetails } from "../../Redux/actions/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./CountryDetail.module.scss";
import { IoIosArrowBack } from 'react-icons/io';
import Footer from "../../components/Footer/Footer";

function CountryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, id]);
  const countryDetail = useSelector((state) => state.detail);
  console.log(countryDetail);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/*Nav Bar*/}
        <div className={styles.nav}>
          <div className={styles.itemBtnVolver}>
            <Link to="/home">
              <IoIosArrowBack/>
            </Link>
          </div>
         
        </div>
        {/*Nav Bar*/}
        {/*Bandera imagen*/}
        <div className={styles.itemImg}>
          <img src={countryDetail.flags} alt="flag from country" width="100%" />
        </div>
        {/*Bandera imagen*/}
        {/*texto*/}
        <div className={styles.itemText}>
        <h1>{countryDetail.name}</h1>
          <h5>Capital: {countryDetail.capital}</h5>
          <h5>Subregion: {countryDetail.subregion}</h5>
          <h5>Poulation: {countryDetail.population}</h5>
          <h5>Area: {countryDetail.area}</h5>
          <h5>Id: {countryDetail.id}</h5>
        </div>
        {/*texto*/}

      </div>
      <div>
        
        <div className={styles.activities}>
        <div className={styles.title}>
        <h1>Activities</h1>
        </div>
        <div className={styles.items}>
        {
          countryDetail.activities?.length > 0 ? (
          countryDetail.activities.map((activity, idx) => {
            return (
              <div key={idx} className={styles.activities}>
                <div className={styles.activity}>
                  <h3>{activity.name}</h3>
                  <p>Dificultad: {activity.dificultad}</p>
                  <p>Teporada: {activity.temporada}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No activities</h3>
        )
      }
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CountryDetail;
