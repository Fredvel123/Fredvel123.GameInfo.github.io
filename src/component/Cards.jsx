import React, { Fragment } from "react";

function Cards({ gameInfo, genres }) {
  //console.log(genres);
  return (
    <Fragment>
      <div>
        {gameInfo
          ? gameInfo.map((item, index) => (
              <div key={index}>
                <img
                  src={item.background_image}
                  alt={item.name}
                  width="100px"
                />
                <div>
                  <h4>VideoGame Name: {item.name}</h4>
                  <p>Released date: {item.released}</p>
                  <div>
                    Genres Game:
                    {genres
                      ? genres.map((element) => <p> {element.name}</p>)
                      : !genres}
                  </div>
                </div>
              </div>
            ))
          : "aun nada"}
      </div>
    </Fragment>
  );
};
export default Cards;
