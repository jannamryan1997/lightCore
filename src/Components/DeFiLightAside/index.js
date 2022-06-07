import {React,useState} from 'react';

import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {DefiLightCurrentCard} from '../DefiLightCurrentCard';

export function DeFiLightAside(){

    const [openProgress, setOpenProgress] = useState(false);
    const [value, setValue] = useState(25);
    const coldprops = {
        percent: 80, // is require
        colorSlice: '#4DC7B5',
        colorCircle: "rgb(174 174 192 / 10%)",
        fontColor: '#4DC7B5',
        fontSize: "1.625em",
        fontWeight: 900,
        size: 178,
        boxShadow: 'inset 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 16%)',
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        inverse: false,
        round: false,
        number: true,
    };

    const handleChange = (value) => {
        setValue(value)
    }

    const [currentCardItem,setCurrentCardItem] = useState([{id:1,value:'cold'},{id:2,value:'hot'}])


    return <>
      <aside className="aside">
            <a href="#" className="add__wallet__btn">
                <span className="add__wallet__btn__plus">
                    <span className="add__wallet__btn__plus__bg">
                        <span></span><span></span>
                    </span>
                </span>
                Add Investment
            </a>
            <h3 className="aside__wallet__title">Total Risk of Investment</h3>
            <div className="aside__chart__wrapper cold">
                <div className="card__risk__chart">
                    {/* <div className="card__risk__chart__min">
                        <p className="card__risk__chart__number">78</p>
                        <p className="card__risk__chart__number__of">of 100</p>
                    </div> */}
                     <CircularProgressBar {...coldprops}>
                    </CircularProgressBar>
                </div>
                <div  className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} onClick={(() => {
                    setOpenProgress(!openProgress)
                })}>
                    <p className="card__risk__alert__title">Alert</p>
                    <p className="card__risk__alert__number">{value}</p>
                </div>
                {
                    openProgress ? <div className="card__risk__range__hr active">
                        <Slider
                            min={0}
                            max={100}
                            value={value}
                            orientation='horizontal'
                            onChange={handleChange}
                        />
                    </div> : null
                }
            </div>
            <ul className="aside__tabs">
                <li className="aside__tabs__list">
                    <a href="#" className="aside__tabs__link active">Current</a>
                </li>
                <li className="aside__tabs__list">
                    <a href="#" className="aside__tabs__link">Last Month</a>
                </li>
                <li className="aside__tabs__list">
                    <a href="#" className="aside__tabs__link">Baseline</a>
                </li>
            </ul>
            {
                currentCardItem.map((element)=>{
                   return <DefiLightCurrentCard key={element.id} element={element}/>
                })
            }
        
        </aside>
    </>
}