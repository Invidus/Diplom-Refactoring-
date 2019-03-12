import React from 'react';
import ReactDOM from 'react-dom';
import CarouselH from './CarouselH/CarouselH';
import Content from './Content/Content';
import ContentH from './ContentH/ContentH';

const Main = () => {
    return (
        <div>
            <CarouselH />
            <ContentH />
            <Content />
        </div>
    )
}
export default Main;