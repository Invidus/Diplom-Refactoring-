import React from 'react';
import ReactDOM from 'react-dom';
import { addInfoActionCreator } from '../../redux/humanDataReducer';

const Calculator = (props) => {
    let heightRef = React.createRef();
    let weightRef = React.createRef();
    let ageRef = React.createRef();
    let addInfo = () => {
        let height = heightRef.current.value;
        let weight = weightRef.current.value;
        let age = ageRef.current.value;
        let action = addInfoActionCreator(height,weight,age);
        props.dispatch(action);
    }
 
    return (
        <div className="container">
            
                <div class="input-group ">
                    <label class="select-lvl" for="inputGroupSelect04">Уровень физической нагрузки</label><br />
                    <select class="custom-select select-lvl" id="inputGroupSelect04"><br />
                        <option selected value="1">Сидячий образ жизни</option>
                        <option value="2">Легкие физ.нагрузки (1-3 раза в неделю)</option>
                        <option value="3">Средние физ.нагрузки (1-5 раз в неделю)</option>
                        <option value="4">Интенсивные тренировки (4-5 раз в неделю)</option>
                        <option value="5">Ежедневные тренировки </option>
                        <option value="6">Тяжелая физическая работа </option>
                    </select>
                    <div>
                        Пол <br/>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Мужчина
                    </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />Женщина
                    </label>
                    </div>
                    <div>
                        <input type="text" name="height" id="height"/>
                        <input type="text" name="weight" id="weight"/>
                        <input type="text" name="age" id="age"/>
                    </div>
                    <div>
                    <button onClick = { addInfo }>Calculate</button>
                    Индекс массы тела <br/>
                    Суточная норма потребления калорий <br/>
                    Нормальный вес <br/>
                    </div>
                </div>
            
        </div >
    )
}

export default Calculator;