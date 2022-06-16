import styles from './Pagination.module.scss';

import React from 'react';

export default function Paginado({countriesPerPage, allCountries, pagination}) {

    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        
        pageNumbers.push(i)
        
    }

    return (
        <div className={styles.container}>
            { 
                pageNumbers && 
                    pageNumbers.map(number => (
                        <button className={styles.button} key={number + Math.random} onClick={() => pagination(number)}>{number}</button>
                ))
            }
        </div>
    )

}