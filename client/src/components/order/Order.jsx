import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderName, getOrderPopu } from "../../Redux/actions/index";
import style from './Order.module.scss'

function Order({ setCurrentPage, setOrden }) {
  const dispatch = useDispatch();

  function handleSortName(e) {
    e.preventDefault();
    dispatch(getOrderName(e.target.value));
    setCurrentPage(1); //setear el ordenamiento en la pagina primera
    setOrden(`Orden ${e.target.value}`);
  }
  function handlSortPopu(e) {
    e.preventDefault();
    dispatch(getOrderPopu(e.target.value));
    setCurrentPage(1);
    setOrden(`Orden ${e.target.value}`);
  }
  return (
    <div className={style.container}>
      <select
        className={style.orderAz}
        onClick={(e) => {
          handleSortName(e);
        }}
      >
        <option value="asc"> a-z</option>
        <option value="desc"> z-a </option>
      </select>

      <select className={style.orderPop} onClick={e => {handlSortPopu(e)}}>
                        <option value='popu'> + population </option>
                        <option value='pop'> - population </option>
                    </select>
    </div>
  );
}
export default Order;
