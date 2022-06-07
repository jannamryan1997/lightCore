import { React, useState } from 'react';

import fox from '../../Assets/img/icons/fox.png';
import coinbase from '../../Assets/img/icons/coinbase.png';

import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import {CurrentDefiCard} from '../CurrentDefiCard';

export function AddDefiShild() {
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

    const [currentCardItem, setCurrentCardItem] = useState([{ id: 1, value: 'cold' }, { id: 2, value: 'hot' }]);
    return (

        <aside className="aside">
            <a href="#" className="add__wallet__btn defi">
                <span className="add__wallet__btn__plus">
                    <img src={fox} alt="" className="fox" />
                    <img src={coinbase} alt="" className="coinbase" />
                </span>
                Wallet Connect
            </a>
            <h3 className="aside__wallet__title">Wallets Risk</h3>
            <div className="aside__chart__wrapper cold">
                <div className="card__risk__chart">
                    {/* <div className="card__risk__chart__min">
                                <p className="card__risk__chart__number">78</p>
                                <p className="card__risk__chart__number__of">of 100</p>
                            </div> */}
                    <CircularProgressBar {...coldprops}>
                    </CircularProgressBar>
                </div>

                <div className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} onClick={(() => {
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
                currentCardItem.map((element) => {
                    return <CurrentDefiCard key={element.id} element={element} />
                })
            }

        </aside>

    )
}