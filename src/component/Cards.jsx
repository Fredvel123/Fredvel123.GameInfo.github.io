import React, { Fragment } from "react";
import './stylesCss/cards.css' 

function Cards({ gameInfo, genres }) {
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
                  <p>
                    Genres Game:
                    {genres.map((element) => (
                      <p>{element.name}</p>
                    ))}
                  </p>
                </div>
              </div>
            ))
          : "aun nada"}
      </div>
    </Fragment>
  );
};
export default Cards;
