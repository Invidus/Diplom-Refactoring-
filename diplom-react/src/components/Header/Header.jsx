import React from 'react';
import {NavLink} from 'react-router-dom';
import img from './../../Images/w512h5121380477032search.png';
// import img from './../../Images/HLogo.png';

const Header = () => (
    <div className="container">
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
                        <NavLink className="nav-link" to="/main">Главная </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/news" >Новости</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/calculate">Расчет калорий</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/support">Поддержка</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Контакты</NavLink>
                    </li>
                </ul>
                {/* Searchbar */}
                <div className="box">
                    <div class="searchbar">
                        <input class="search_input" type="text" name="" placeholder="Поиск..." />
                        <a to="#" class="search_icon"><i class="fas fa-search"><img src={img} height="18px" /></i></a>
                    </div>
                </div>
                {/* Searchbar */}
            </div>
        </nav>
    </div>
)
export default Header;