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
                  <p> <span>VideoGame Name:</span> {item.name}</p>
                  <p> <span>Released date:</span>  {item.released}</p>
                  <p> <span>Updaded: </span> {item.updated}</p>
                  <div className="genres"> <span> Game Genres:</span>   {item.genres.map((element, index) => <p key={index} className="genres-text">{element.name} </p> )} </div>
                </div>
              </div>
            ))
          : "aun nada"}
          
        
      </div>
    </Fragment>
  );
};
export default Cards;
