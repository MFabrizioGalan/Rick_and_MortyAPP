import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect} from 'react';



function Card ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] =useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      //<div className={style.container}>
      //   <div className={style.carta}>
      //      <div className={style.cover}>
      //         <img src={image} alt='' /> 
      //         <div className={style.fondo} url='https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-de-720x1280.-fondo-de-pantalla-de-rick-y-morty-169x300.jpg'></div>
            
      //      </div>
      //      <div className={style.description}>
      //       <h2 /*className={style.name}*/>Nombre:{name}</h2>
      //       <h2 /*className={style.status}*/>Status:{status}</h2>
      //       <h2 /*className={style.species}*/>Species:{species}</h2>
      //       <h2 /*className={style.gender}*/>Gender:{gender}</h2>
      //       <h2 /*className={style.origin}*/>Origin:{origin}</h2>
      //       {<button onClick={onClose}>X</button>}
      //      </div>
      //   </div>
      //</div>

      <div className={style.contenedor}>
         
         <div className={style.cartaPadre}>
            <div className={style.carta}>
               <div className={style.cartaCara} >
                  <img src={image} alt=''/>
                  <div className={style.bg}></div>
                  
                     <h2>{name}</h2>
                  
               </div>
              
               <div className={style.cartaSello}>
               {
                  isFav 
                  ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }

               <Link to={`/detail/${id}`} >
                  <div className={style.bg}>
                     <h2 >{name}</h2>
                  </div>
                  
               </Link>
                 {/* <h2 >Nombre:{name}</h2> */}
                 <h2 >Status:{status}</h2>
                 <h2 >Species:{species}</h2>
                 <h2 >Gender:{gender}</h2>
                 <h2 >Origin:{origin}</h2>
                 {<button onClick={() => onClose(id)}>X</button>}

               </div>
            </div>
         </div>
      </div>


   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites 
   }
}



const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);