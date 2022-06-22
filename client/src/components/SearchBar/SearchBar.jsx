import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {getSearchName} from "../../Redux/actions/index";
import styles from "./SearchBar.module.scss";

 
export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    useEffect(() => {
        dispatch(getSearchName(name))
    },[dispatch, name])

    return (
        <div className={styles.container}>
            <input className={styles.input} type='text' placeholder='Escriba su el pais'
            onChange={e => handleInputChange(e)}></input>
        </div>
    )
}