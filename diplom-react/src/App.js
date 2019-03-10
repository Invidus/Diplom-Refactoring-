import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import CarouselH from './components/CarouselH/CarouselH';
import ContentH from './components/ContentH/ContentH';
import Carousel from './components/Carousel/Carousel';
import Content from './components/Content/Content';

const App = () => (
    <div>
    <Header/>
    <CarouselH/>
    <ContentH />
    <Carousel />
    <Content />
    <Footer/>
    </div>
)

export default App;