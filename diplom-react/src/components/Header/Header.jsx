import React from 'react';
import ReactDOM from 'react-dom';
import img from './../../Images/w512h5121380477032search.png';
// import img from './../../Images/HLogo.png';

const Header = () => (
    <div className = "container">
    <nav class="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand brand-logo" href="index.php">
            <img className="logo" src={require('./../../Images/HLogo.png')} alt="logo" width="100px" height="87px" />
        </a>

        <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/main">Главная </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/news" >Новости</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/calculate">Расчет калорий</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/support">Поддержка</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Контакты</a>
                </li>
            </ul>
            <div className="box">
                {/* <div className="container-4">
                    <input type="search" id="search" placeholder="Поиск..." />
                    <button className="icon"><i className="fa fa-search"></i></button>
                </div> */}
                <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Поиск..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"><img src={img} height = "18px" /></i></a>
        </div>
            </div>
        </div>
    </nav>
    </div>
)
export default Header;