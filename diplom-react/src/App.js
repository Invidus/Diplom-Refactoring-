import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
// import CarouselH from './components/CarouselH/CarouselH';
// import ContentH from './components/ContentH/ContentH';
import Carousel from './components/main/Carousel/Carousel';
// import Content from './components/Content/Content';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/main/main';
import Calculator from './components/Calculator/Calculator';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <div>
            <Route path = '/main' component = { Main }/> {/*Лендинг*/}
            <Route path = '/calculate' component = { Calculator }/> {/*Калькулятор*/}

            </div>
            
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App;