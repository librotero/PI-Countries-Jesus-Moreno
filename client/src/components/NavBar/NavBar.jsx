import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../order/Order";

const NavBar = ({ setCurrentPage, setOrden }) => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.item}>
          <Link
            style={{ "text-decoration": "none", color: "white" }}
            to="/home"
          >
            <button>Countries</button>
          </Link>
        </div>
        <div className={style.item}>
          <Link style={{ "text-decoration": "none" }} to="/activities">
            <button>Activities</button>
          </Link>
        </div>
      </div>
     
      <div className={style.searchbar}>
        <h1 className={style.item}>Countries</h1>
        <div className={style.itemSearch}>
          <SearchBar />
        </div>
        <h3>Encuentra tu destino hoy</h3>
      </div>
     
      <div>
        <Order setCurrentPage={setCurrentPage} setOrden={setOrden} />
      </div>
    </div>
  );
};
export default NavBar;
