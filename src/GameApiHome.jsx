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
  const urlApiMain = `https://api.rawg.io/api/games?key=855092981e8e43ab9ec41f33b09165f9&search=${input.titleGame}`;
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
  const [genre, setGenre] = useState([]);
  const sendInfoSearch = e => {
    e.preventDefault();
    getApi();
    //console.log(input);
    //console.log(GameInfo[0].genres);
    setGenre(GameInfo[0].genres);
    console.log(genre);
  }
  return (
    <Fragment>
      <div>
        <form action="" onSubmit={sendInfoSearch}>
          <div>
            <span htmlFor="">search a video Game:</span>
            <input
              type="text"
              placeholder="type any video game here!"
              name="titleGame"
              value={input.titleGame}
              onChange={sendInput}
            />
            <button>Search</button>
          </div>
        </form>

        <Cards gameInfo={GameInfo} genres={genre} />
      </div>
    </Fragment>
  );  
}
export default GameApiHome;