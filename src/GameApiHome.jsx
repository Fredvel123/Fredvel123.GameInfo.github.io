import React, { Fragment, useState, useEffect } from 'react';
// import the components
import Cards from './component/Cards';
import Pagination from './component/Pagination';
// import styles css and images
import './component/stylesCss/form.css';
import './component/stylesCss/header.css';
import img from './component/img/menu.png'
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
  const [pagination, setPagination] = useState([])
  const urlApiMain = `https://api.rawg.io/api/games?key=855092981e8e43ab9ec41f33b09165f9&search=${input.titleGame}`;
  const getApi = async (url) => {
    const urlApi = await fetch(url);
    const res_json = await urlApi.json();
    setPagination(res_json)
    setGameInfo(res_json.results);
  } 
  useEffect(() => {
    getApi(urlApiMain );
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // function to next the page.
  const onNext = () => {
    getApi(pagination.next);
    // setGameInfo(pagination.results)
  }
  const onPrev = () => {
    getApi(pagination.previous);
  }

  const sendInfoSearch = e => {
    e.preventDefault();
    getApi(urlApiMain);
  }
  return (
    <Fragment>
      <header className="header">
        <div className="logo"><h1>Game Info App</h1></div>
        <form action="" onSubmit={sendInfoSearch} className="form">
          <div className="search">
            
            <input
              type="text"
              placeholder="type any video game here!"
              name="titleGame"
              value={input.titleGame}
              onChange={sendInput}
            />
            
          </div>
        </form>

        <div className="menu">
          <ul>
            <a href="#!">Genres</a>
            <a href="#!">Platforms</a>
            <a href="#!">Games</a>
          </ul>
        </div>
        <div className="icon">
          <img src={img} alt="" width="60px"/>
        </div>
      </header>
        
        <Pagination pagination={pagination} next={onNext} prev={onPrev} />
        <Cards gameInfo={GameInfo}/>
        <Pagination pagination={pagination} next={onNext} prev={onPrev} />
        
    </Fragment>
  );  
}
export default GameApiHome;