import React from "react";
import {Link} from 'react-router-dom'
import s from './Inicio.module.scss'
const Inicio = () => {
    return ( 
        <div className={s.container}>
        <img src={"https://f.vividscreen.info/soft/9bab90bb116f211eeac7dfd184e2575d/Travel-1920x1080.jpg"} alt="" width="100%" />
        <div >
        <button className={s.buton}>
        <Link style={{"textDecoration":"none", "color": "white"}} to ={"/home"}>Welcome
        </Link> 
        </button>
        </div> 
        </div>
    );
};

export default Inicio;