import { React, useState } from 'react';

import fox from '../../Assets/img/icons/fox.png';
import coinbase from '../../Assets/img/icons/coinbase.png';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

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
                    openProgress ? <div class="card__risk__range__hr active">
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
            <div className="aside__card cold">
                <div className="row">
                    <div className="aside__card__left">
                        <h3 className="aside__card__title">Cold Wallets Risk</h3>
                        <p className="aside__card__numbers">93/<span>100</span></p>
                    </div>
                    <div className="card__risk__alert">
                        <p className="card__risk__alert__title">Alert</p>
                        <p className="card__risk__alert__number">70</p>
                    </div>
                </div>
                <div className="aside__card__progress">
                    <div className="aside__card__progress__bg" style={{ width: '93%' }}></div>
                </div>
            </div>
            <div className="aside__card hot">
                <div className="row">
                    <div className="aside__card__left">
                        <h3 className="aside__card__title">Hot Wallets Risk</h3>
                        <p className="aside__card__numbers">65/<span>100</span></p>
                    </div>
                    <div className="card__risk__alert">
                        <p className="card__risk__alert__title">Alert</p>
                        <p className="card__risk__alert__number">70</p>
                    </div>
                </div>
                <div className="aside__card__progress">
                    <div className="aside__card__progress__bg" style={{ width: '65%' }}></div>
                </div>
            </div>
        </aside>

    )
}