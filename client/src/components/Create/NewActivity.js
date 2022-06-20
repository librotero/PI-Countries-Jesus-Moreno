
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postActivity, getCountries } from "../../Redux/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import styles from './NewActivity.module.scss';
const validar = (input) => {
	let errors = {};
	if (!input.name) {
		errors.name = 'falta nombre';
	}
	if (!input.dificultad) {
		errors.dificultad = 'falta dificultad';
	}
	if (input.duracion < 1) {
		errors.duracion = 'falta duracion';
	}
	if (!input.temporada) {
		errors.temporada = 'falta temporada';
	}
	return errors;
};

const NewActivity = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries:[]
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
		setErrors(
			validar({
				...input,
				[e.target.name]: e.target.value,
			})
		);
    }

    function handleSelect(e) {
		setInput({
			...input,
			countries: [...input.countries, e.target.value],
		});
	};

    
    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(el => el !== e)
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(input))
        alert("Actividad creada")
        setInput({
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countries:[]
        })
        console.log(input)
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getCountries())
    })

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Crea tu Actividad</h1>
        <nav className={styles.nav}>
            <form  onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label> Nombre: </label>
                    <input required type="text" placeholder="name" name="name" value={input.name} onChange={(e) => handleChange(e)}/>
                    {
                        errors.name && (
                            <p>
                                {errors.name}
                            </p>
                        )
                    }
                </div>
                <div>
                    <label> Dificultad: </label>
                    <select required name='dificultad' value={input.dificultad} onChange={(e) => handleChange(e)}> 
                        <option value="" selected disabled>Dificultad</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {
                        errors.dificultad && (
                            <p>
                                {errors.dificultad}
                            </p>
                        )
                    }
                </div>
                <div>
                    <label> Duracion: </label>
                    <input required type="time" placeholder="hh.mm" name="duracion" value={input.duracion} onChange={(e) => handleChange(e)}/>
                    {
                        errors.duracion && (
                            <p>
                                {errors.duracion}
                            </p>
                        )
                    }
                </div>
                <div>
                    <label> Temporada: </label>
                        <select required  name='temporada' value={input.temporada} onChange={(e) => handleChange(e)}>
                            <option value="" selected disabled>Temporada</option>
                            <option>Verano</option>
                            <option>Otoño</option>
                            <option>Invierno</option>
                            <option>Primavera</option>
                        </select>
                    {
                        errors.temporada && (
                            <p>
                                {errors.temporada}
                            </p>
                        )
                    }
                </div>
                <div className={styles.option}>
                    <div>
                        <label>Countries: </label>
                        <select onChange={(e) => handleSelect(e)}>
                            <option  selected="false" disabled>Seleccionar pais</option>
                            {countries.map((e) => (
                                <option value={e.id}>{e.name}</option>
                            ))}
                        </select>
                        <ul>
                            {input.countries.map((e) =>( 
                                <li>
                                    <button type="button" onClick={() => handleDelete(e)}>{e}{" "}x</button>
                                </li>
                            ))}
                        </ul>        
                    </div>
                </div>
                <div>
                    <button  className={styles.create} type='submit'>Create</button>
                    <Link to='/home'>
                        <button  className={styles.return} >Return</button>
                    </Link>
                </div>
            </form>
        </nav>
    </div>
    );
    }
export default NewActivity;