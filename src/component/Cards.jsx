import React, { Fragment } from "react";
//import './styles/cards.css'

function Cards({ gameInfo, genres }) {
  
  //console.log(genres);
  return (
    <Fragment>
      <div className="cards bg-secondary">
        { gameInfo ?
          gameInfo.map((item, index) => (
            <div key={index}>
              <h1 >VideoGame Name: {item.name}</h1>
              <img src={item.background_image} alt={item.name} width="100px" />
              <p>Released date: {item.released}</p>
              <div>Genres Game: {genres ? genres.map(element => <p> {element.name}</p> ) : !genres}</div>
            </div>
          )) :
          "aun nada"
        }
      </div>
    </Fragment>
  );
}

export default Cards;
