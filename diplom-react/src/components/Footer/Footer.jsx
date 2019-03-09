import React from 'react';
import ReactDOM from 'react-dom';


const Footer = () => (

    <footer className="page-footer font-small blue-grey lighten-5">

        <div >
            <div className="container">

                {/* Grid row*/}
                <div className="row py-4 d-flex align-items-center">

                    {/* Grid column */}
                    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 col-white">
                        <h6 className="mb-0">Присоединяйтесь к нам в социальных сетях!</h6>
                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-md-6 col-lg-7 text-center text-md-right">

                        {/* Facebook */}
                        <a className="fb-ic">
                            <i className="fa fa-facebook white-text mr-4 col-white"> </i>
                        </a>
                        {/* Twitter */}
                        <a className="tw-ic">
                            <i className="fa fa-twitter white-text mr-4 col-white"> </i>
                        </a>
                        {/* Google +*/}
                        <a className="gplus-ic">
                            <i className="fa fa-google-plus white-text mr-4 col-white"> </i>
                        </a>
                        {/*Linkedin */}
                        <a className="li-ic">
                            <i className="fa fa-linkedin white-text mr-4 col-white"> </i>
                        </a>
                        {/*Instagram*/}
                        <a className="ins-ic">
                            <i className="fa fa-instagram white-text col-white"> </i>
                        </a>

                    </div>
                    {/* Grid column */}

                </div>
                {/* Grid row*/}

            </div>
        </div>

        <div className="container text-center text-md-left mt-5">

            {/* Grid row */}
            <div className="row mt-3 dark-grey-text">

                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

                    {/* Content */}
                    <h6 className="text-uppercase font-weight-bold">Healthy diet</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
                    <p>КНИТУ-КХТИ </p>
                    <p> Юридический адрес:420245,</p>
                    <p>г.Казань,Карла Маркса 68,</p>
                    <p>ИНН 2549574523,</p>
                    <p> КПП 204968544,</p>
                    <p>Расчетный счет 48204894839498395</p>

                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">Сделано на</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
                    <p>
                        <a className="dark-grey-text" href="#!">Bootstrap</a>
                    </p>
                    <p>

                    </p>

                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">Поддержка</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"  />
                    <p>
                        <a name="support" className="dark-grey-text" href="#!">Напишите</a><br /> нам при возникновении вопроса</p>


                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">Контакты</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
                        <p ><a name="contacts" href="#"></a>
                            <i className="fa fa-home mr-3"></i> Россия, Казань, ул.Карла Маркса 68</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> + 79 234 567 88</p>
                        <p>
                            <i className="fa fa-print mr-3"></i> + 55 664 567 89</p>

                </div>
                    {/* Grid column */}

                </div>
                {/* Grid row */}

            </div>
            {/* Footer Links */}

            {/* Copyright */}
            <div className="footer-copyright text-center text-black-50 py-3">© 2019
    <a className="dark-grey-text" href="index.html"> Healthy diet.com</a>
            </div>
            {/* Copyright */}

</footer>
)
        
export default Footer;