import React, { Fragment } from "react";

function Cards({ gameInfo }) {
  
  //console.log(genres);
  return (
    <Fragment>
      <h1>this will be a card</h1>
      <div>
        { gameInfo ?
          gameInfo.map((item, index) => (
            <div key={index}>
              <h1 className="fs-5">VideoGame Name: {item.name}</h1>
              <img src={item.background_image} alt={item.name} width="100px" />
              <p>Released date: {item.released}</p>
            </div>
          )) :
          "aun nada"
        }
      </div>
    </Fragment>
  );
}

export default Cards;
