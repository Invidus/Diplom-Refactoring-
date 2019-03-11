import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
// import CarouselH from './components/CarouselH/CarouselH';
// import ContentH from './components/ContentH/ContentH';
// import Carousel from './components/Carousel/Carousel';
// import Content from './components/Content/Content';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/main/main';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <div>
            <Route path = '/main' component = { Main}/>
            {/* <CarouselH />
            <ContentH />
            <Carousel />
            <Content /> */}
            </div>
            
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App;