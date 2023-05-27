import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar ({onSearch}) {
   const [id,setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }



   return (
      <div className={style.boton}>
         <input type='search'  onChange={handleChange} value={id} placeholder='¿Te ayudo?'/>
         <button onClick ={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}

