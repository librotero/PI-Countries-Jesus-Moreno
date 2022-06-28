import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getCountries } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NewActivity.module.scss";
const validar = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "falta nombre";
  }
  if (!input.dificultad) {
    errors.dificultad = "falta dificultad";
  }
  if (input.duracion < 1) {
    errors.duracion = "falta duracion";
  }
  if (!input.temporada) {
    errors.temporada = "falta temporada";
  }
  if (!input.countries.length) {
    errors.countries = "falta countries";
  }
  return errors;
};

const NewActivity = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if(input.countries.includes(e.target.value)){
alert("este pais ya existe")
    }else{
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  }
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(input));
    alert("Actividad creada");
    setInput({
      name: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      countries: [],
    });
    console.log(input);
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getCountries());
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
      <h1 className={styles.title}>Crea tu Actividad</h1>
      <div className={styles.content}>
        <form className={styles.formulario} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.item1}>
        <h3>Activity:</h3>
            <input
              required
              type="text"
              placeholder="name"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
        </div>

            

         <div className={styles.item2}>
         <h3> Dificultad: </h3>
         <select
           required
           name="dificultad"
           value={input.dificultad}
           onChange={(e) => handleChange(e)}
         >
           <option value="" selected disabled>
             Dificultad
           </option>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
         </select>
         {errors.dificultad && <p>{errors.dificultad}</p>}
         </div>
            
      
         
           <div className={styles.item3}>
           <h4> Duracion: </h4>
           
           <input
           required
           name="duracion"
           type="number"
           step=""
           min="1"
           max="12"
           defaultValue=""
           onChange={(e) => handleChange(e)}
         />
           {errors.duracion && <p>{errors.duracion}</p>}
           </div>
            
       
          
           <div className={styles.item4}> 
           <h4> Temporada: </h4>
           <select
             required
             name="temporada"
             value={input.temporada}
             onChange={(e) => handleChange(e)}
           >
             <option value="" selected disabled>
               Temporada
             </option>
             <option>Verano</option>
             <option>Otoño</option>
             <option>Invierno</option>
             <option>Primavera</option>
           </select>
           {errors.temporada && <p>{errors.temporada}</p>}
           </div>
            
         
        <div className={styles.item5}>
        <h4>Countries: </h4>
        <select onChange={(e) => handleSelect(e)}>
          <option selected="false" disabled>
            Seleccionar pais
          </option>
          {countries.map((e) => (
            <option value={e.id}>{e.name}</option>

          ))}
        </select>
        {errors.countries && <p>{errors.countries}</p>}
        </div>
              <div className={styles.selectCountries}>
                {input.countries.map((e) => (
                  
                    <button type="button">
                      {e.imagen} 
                    </button>
                ))}
              </div>
          <div className={styles.buttonsbottom}>
            <button className={styles.create} type="submit">
              Create
            </button>
            <Link to="/home">
              <button className={styles.return}>Return</button>
            </Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};
export default NewActivity;
