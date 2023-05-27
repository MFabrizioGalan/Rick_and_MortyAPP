import style from './Form.module.css'
import { useState } from "react";
import Validation from "../Validation/Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name] : event.target.value
        })        
        setErrors(Validation({
            ...userData,
            [event.target.name] :event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.titulo}>
                {/* <h2 className={style.form_portada}></h2> */}
                <h2 className={style.form_title}>Inicia Sesión</h2>
                <p className={style.form_parafo}>¡Vamos a divertirnos!</p>
            </div>
            <div className={style.container}>
                <div className={style.group}>
                    <label htmlFor="email" className={style.form_label}>Email:  </label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} className={style.form_input} placeholder='Email'/>
                    {errors.email && <p className={style.form_error}>{errors.email}</p>}
                </div>
            <hr />
                <div className={style.group}>
                    <label htmlFor="password" className={style.form_label}>Password:  </label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} className={style.form_input} placeholder='Constraseña'/>
                    {errors.password && <p className={style.form_error}>{errors.password}</p>}
                </div>
            <button className={style.form_boton}>Entrar</button>
            </div>
        </form>

    )
}
export default Form;