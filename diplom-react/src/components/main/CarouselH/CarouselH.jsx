import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'react-image';

const CarouselH = () => (
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 carousel-imgs" src={require('./../../../Images/algunos-motivos-por-los-cuales-engordamos_1100x500.jpg')} alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-font">Похудение</h1>
                        <p className="carousel-font carousel-text"><b>Уменьшите свой вес на 3 кг всего за одну неделю!</b></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-imgs" src={require('./../../../Images/tips-to-stick-to-dieting-amp-exercising-without-failing-or-getting-discouraged1400-1527597291_1100x513.jpg')} alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-font">Набор массы</h1>
                        <p className="carousel-font carousel-text"><b> Мечтаете нарастить 5 - 7 килограммов качественной мускулатуры, но не знаете как?</b></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-imgs" src={require('./../../../Images/preventive-big (1).jpg')} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="carousel-font">Здоровое питание</h1>
                        <p className="carousel-font carousel-text"><b>Сохранение здоровья, профилактика болезней и укрепление организма в целом</b></p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

)
export default CarouselH;