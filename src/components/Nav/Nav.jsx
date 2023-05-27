import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";


const Nav= ({onSearch,setAccess}) => {
    
    const handleLogOut = () => {
        setAccess(false);
    }

    return(
        <nav className={style.nav}>
            
            {/* <div className={style.btns}>
                 <Link to='/about'>ABOUT</Link>
                 <Link to='/home'>HOME</Link>
            </div>
            <button onClick={handleLogOut}>Log Out</button>

            <SearchBar onSearch={onSearch}/> */}
            <ul className={style.contenedor}>
                <li className={style.lista}><Link to='/about' className={style.linkin}>ABOUT</Link></li>
                <li className={style.lista}><Link to='/home' className={style.linkin}>HOME</Link></li>
                <li className={style.lista}><button onClick={handleLogOut} className={style.boton}>Log Out</button></li>
                <li className={style.lista}><SearchBar onSearch={onSearch} className={style.buscador}/></li>
            </ul>

            
            
        </nav>
    )
}

export default Nav;