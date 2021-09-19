import React, { Fragment } from "react";
import './stylesCss/cards.css' 

function Cards({ gameInfo }) {
  //console.log(genres);
  return (
    <Fragment>
      <div className="cards-background">
        
      
        {gameInfo
          ? gameInfo.map((item, index) => (
              <div key={index} className="cards">
                <img
                  src={item.background_image}
                  alt={item.name}
                  width="100px"
                />
                <div className="cards-text">
                  <h4>VideoGame Name: {item.name}</h4>
                  <p>Released date: {item.released}</p>
                  <p>Updaded: {item.updated}</p>
                  <div className="genres">Game Genres: {item.genres.map(element => <p className="genres-text">{element.name} </p> )} </div>
                </div>
              </div>
            ))
          : "aun nada"}
          
        
      </div>
    </Fragment>
  );
};
export default Cards;
