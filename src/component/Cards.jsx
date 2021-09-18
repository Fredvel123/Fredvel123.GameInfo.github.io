import React, { Fragment } from "react";

function Cards({ gameInfo, genres }) {
  //console.log(genres);
  return (
    <Fragment>
      <div className=" ">
        <div className="container">
          <div className="row float-start ">
            <div className="col-4">
              
                {gameInfo
                  ? gameInfo.map((item, index) => (
                      <div key={index} className="card mt-2 mb-2 ">
                        <img
                          src={item.background_image}
                          alt={item.name}
                          width="100px"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h4 className="card-title fs-5">
                            VideoGame Name: {item.name}
                          </h4>
                          <p className="card-text">
                            Released date: {item.released}
                          </p>
                          <div className="card-text">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Cards;
