import React from "react";
import styles from './Filter.module.scss';
import {useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getContinent} from '../../Redux/actions/index';
import {Link} from 'react-router-dom';
import {getAllActivities, byActivities} from '../../Redux/actions/index';

const Filter = () => {
    const dispatch = useDispatch();
    function handleFilterContinent(e){
        dispatch(getContinent(e))
    }
    //activities
    const activities = useSelector((state) => state.activities)
    useEffect(() => {
        dispatch(getAllActivities())
    },[dispatch])

    function handleFilterActivities(e){
        dispatch(byActivities(e))
        
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
        {
            activities.map((el,i) => {
                return(
                    <button key={i} onClick={e => handleFilterActivities(el.name)}>{el.name}</button> 
                )

        }
        )}
        <Link to="/newactivity">
        <button>add activities</button>
        </Link>
        </div>
        </div>
    )
    }
    
export default Filter;