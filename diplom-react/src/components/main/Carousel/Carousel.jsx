import React from 'react';
import ReactDOM from 'react-dom';

const Carousel = () => {
    return (
        




        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
                <div className="w-100 carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={require('./../../../Images/c02f2badaa8e9f8c2ee6c97d1ac989b4_200.jpg')} alt="" className="rounded-circle img-fluid hide" />
                                </div>
                                <div className="col-sm-9">
                                    <h4>Алексей Иванов</h4>
                                    <span className="otziv-face"><h5>Программист</h5></span>
                                    <small className="font-rec">Составив рацион питания на сайте healhy diet, я начал придерживаться его. Спустя месяц, я понял, что не стоит останавливаться только на диете. Я начал посещать спортзал, возможно, healthy diet изменил мою жизнь в лучшую сторону.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={require('./../../../Images/200x200_4WtjLiCFbhc7SPxJ4K2iG5z3YHo8c46A___jpg____0_6c52dbde.jpg')} alt="" className="rounded-circle img-fluid hide" />
                                </div>
                                <div className="col-sm-9">
                                    <h4>Анастасия Навратилова</h4>
                                    <span className="otziv-face"><h5>Бывшая теннисистка</h5></span>
                                    <small className="font-rec">Здоровое питание - главное условие полноценной и счастливой жизни. Данный сайт позволяет мне составлять рацион без каких-либо заморочек за одну минуту.Удобно и просто!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={require('./../../../Images/main-thumb-297095976-200-abacptppoxraxdehzkqmybwtprjxuxyi.jpeg')} alt="" className="rounded-circle img-fluid hide" />
                                </div>
                                <div className="col-sm-9">
                                    <h4>Виталий Кузнецов</h4>
                                    <span className="otziv-face"><h5>Офисный работник</h5></span>
                                    <small className="font-rec">Мне срочно нужна была диета для похудения, ведь скоро лето!И healthy diet помог мне в этом, спустя месяц, следуя инструкциям я уменьшил свой вес на целых 10 кг!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-right navi">
                    <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                    </a>
                    <a className="" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon " aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>

    )
}
export default Carousel;