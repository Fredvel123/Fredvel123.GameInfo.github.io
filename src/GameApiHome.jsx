import React, { Fragment, useState, useEffect } from 'react';
import Cards from './component/Cards'

function GameApiHome() {
  // function to get the info for the input.
  const [input, setInput] = useState({
    titleGame: ""
  })  
  const sendInput = e => {
    const {name, value} = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name] : value
    }) )

  }
  // function to get the Api from the api games.
  const [GameInfo, setGameInfo] = useState([]);
  const urlApiMain = `https://api.rawg.io/api/games?key=855092981e8e43ab9ec41f33b09165f9&search=${input.titleGame}&search_precise`;
  const getApi = async () => {
    const urlApi = await fetch(urlApiMain);
    const res_json = await urlApi.json();
    setGameInfo(res_json.results);
  } 
  //const solutionFetch = useRef(getApi);
  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const sendInfoSearch = e => {
    e.preventDefault();
    //sendInput();
    getApi();
    //console.log(input);
    //console.log(GameInfo);
  }
  return (
    <Fragment>
      <form
        action=""
        className="py-3 px-3 bg-dark text-light"
        onSubmit={sendInfoSearch}
      >
        <div className="p-2 input-group">
          <span htmlFor="" className="input-group-text">
            search a video Game:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="type any video game here!"
            name="titleGame"
            value={input.titleGame}
            onChange={sendInput}
          />
          <button className="btn btn-outline-light ml-2">Search</button>
        </div>
      </form>
      
      <Cards gameInfo = {GameInfo}/>
    </Fragment>
  );  
}
export default GameApiHome;