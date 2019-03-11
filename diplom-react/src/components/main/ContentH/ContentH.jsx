
import React from 'react';
import ReactDOM from 'react-dom';


const ContentH = () => {
    return (
        <div>
            <div class="container">
                <h1 id="main-h">С помощью healthy diet вы:</h1>
                <div class="grid">
                    <div><img class="small-images-main" src={require('./../../../Images/imgonline-com-ua-Replace-color-XApSsBBLqPu6pfO0.png')} alt="" />
                        <h4><span class="main-text">Начнете питаться правильно</span></h4>
                        Наш сайт поможет вам составить идеальный рацион соответствующий вашим целям. Будь то похудение, набор мышечной массы или же просто поддержание своего организма в здоровом состоянии.</div>
                    <div><img class="small-images-main" src={require('./../../../Images/imgonline-com-ua-Replace-color-HG8N1i2Ync.png')} alt="" />
                        <span class="main-text"> <h4>Повысите эффективность тренировок</h4></span>Белки – основной «строительный» компонент, необходимый для наращивания и поддержания мышечной массы. Специально сбалансированные белковые рационы питания для спортсменов помогут получить вам максимальную пользу от тренировок.</div>
                    <div><img class="small-images-main" src={require('./../../../Images/imgonline-com-ua-Replace-color-l3NCOHXT5q3.png')} alt="" />
                        <span class="main-text">  <h4>Не будете тратить время</h4></span> Вам больше не нужно рыться в интернете в поиске подходящей для вас диеты, с помощью Healty diet вы получите индивидуализированный рацион питания, расчитанный по формулам выведенными профессиональными нутрицистами.</div>
                    <div><img class="small-images-main" src={require('./../../../Images/imgonline-com-ua-Replace-color-U182VDioQLgcsx.png')} alt="" />
                        <span class="main-text"> <h4>Станете выглядеть лучше </h4></span>Все, что от вас потребуется, - это придерживаться индивидуального рациона от Healty diet!</div>
                </div>
            </div>
        </div>

    )
}

export default ContentH;