import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderName, getOrderPopu } from "../../Redux/actions/index";

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
    <div>
      <select
        className=""
        onClick={(e) => {
          handleSortName(e);
        }}
      >
        <option value="asc"> A-Z</option>
        <option value="desc"> Z-A </option>
      </select>

      <select className="" onClick={e => {handlSortPopu(e)}}>
                        <option value='popu'> Poblacion asc </option>
                        <option value='pop'> Poblacion des </option>
                    </select>
    </div>
  );
}
export default Order;
