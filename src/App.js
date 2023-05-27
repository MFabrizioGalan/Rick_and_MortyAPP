import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Form from './components/Form/Form';

const email = 'fabrizio@gmail.com';
const password = '123asd';
 

function App() {
   const location =useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }

   }

   useEffect(() =>{
      !access && navigate('/')

   }, [access])


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }



   return (
      <div className='App'>
         {
            // location.pathname !== '/'
            // ? <Nav onSearch={onSearch}/>
            // : null
            location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>
         }
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path = '/home' element={<Cards characters={characters}  onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
