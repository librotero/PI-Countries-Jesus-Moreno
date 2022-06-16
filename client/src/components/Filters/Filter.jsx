import React from "react";
import styles from './Filter.module.scss'
import {useDispatch} from 'react-redux';
import {getContinent} from '../../Redux/actions/index';

const Filter = () => {
    const dispatch = useDispatch();
    function handleFilterContinent(e){
        dispatch(getContinent(e))
    }
    return (
        <div className={styles.container}>
        <div>
        <h5>Continents</h5>
        <div className={styles.containerButtons}>
        <button onClick={e => handleFilterContinent("Europe")}>Europe</button>
        <button onClick={e => handleFilterContinent("Asia")}>Asia</button>
        <button onClick={e => handleFilterContinent("Africa")}>Africa</button>
        <button onClick={e => handleFilterContinent("Oceania")}>Oceania</button>
        <button onClick={e => handleFilterContinent("Antartica")}>Antartica</button>
        <button onClick={e => handleFilterContinent("South America")}>South America</button>
        <button onClick={e => handleFilterContinent("North America")}>North America</button>
        <button onClick={e => handleFilterContinent("all")}>All</button>


        </div>
        </div>
        <div>
        <h5>Activities</h5>
        </div>
        </div>
    )
    }
    
export default Filter;