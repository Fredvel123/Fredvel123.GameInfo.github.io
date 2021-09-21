import React, { Fragment, useState, useEffect } from 'react';
// import the components
import Cards from './component/Cards';
import Pagination from './component/Pagination';
// import styles css and images
import './component/stylesCss/form.css';
import './component/stylesCss/header.css';
import img from './component/img/search.png'
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
    setPagination(res_json);
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
    setopen(!open)
  }
  // function to the menu.
  const [open, setopen] = useState(false);
  const openCloseMenu = () => {
    setopen(!open);
  }
  // const fullGenreApi =('https://api.rawg.io/api/genres?key=855092981e8e43ab9ec41f33b09165f9');
  return (
    <Fragment>
      <header className="header" id="header">
        <div className="logo"><h1>Game Info App</h1></div>
        <form action="" onSubmit={sendInfoSearch} className="form1">
          <div className="search">
            
            <input
              type="text"
              placeholder="Do you want to search a Video Game?"
              name="titleGame"
              value={input.titleGame}
              onChange={sendInput}
            />
            
            
          </div>
        </form>
        <div className="icon">
          <img src={img} alt="" width="60px" onClick={openCloseMenu}/>
        </div>

        <div className={open ? "menu2" : "menu"} >
        <form action="" onSubmit={sendInfoSearch} className="form2">
          <div className="search">
            
            <input
              type="text"
              placeholder="Do you want to search a Video Game?"
              name="titleGame"
              value={input.titleGame}
              onChange={sendInput}
            />
            <p className="btn-next" onClick={sendInfoSearch}>Search</p>
          </div>
        </form>
        </div>

      </header>
        
        <Pagination pagination={pagination} next={onNext} prev={onPrev} />
        <Cards gameInfo={GameInfo}/>
        <Pagination pagination={pagination} next={onNext} prev={onPrev} />
        
    </Fragment>
  );  
}
export default GameApiHome;