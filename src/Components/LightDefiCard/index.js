import { React, useState } from 'react';

import arrow from '../../Assets/img/icons/arrow_down.png';

import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export function LightDefiCard({ element, deleteItem }) {
    const [value, setValue] = useState(25);
    const [openProgress, setOpenProgress] = useState(false);
    const handleChange = (value) => {
        setValue(value)
       
    }
    
    const coldprops = {
        percent: 78, // is require
        colorSlice: '#4DC7B5',
        colorCircle: "rgb(174 174 192 / 10%)",
        fontColor: '#4DC7B5',
        fontSize: "1.625em",
        fontWeight: 900,
        size: 108,
        boxShadow: 'inset 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 16%)',
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        inverse: false,
        round: false,
        number: true,
    };

    const riskprops = {
        percent: 78, // is require
        colorSlice: '#F27281',
        colorCircle: "rgb(174 174 192 / 10%)",
        fontColor: '#F27281',
        fontSize: "1.625em",
        fontWeight: 900,
        size: 108,
        boxShadow: 'inset 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 16%)',
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        inverse: false,
        round: false,
        number: true,
    }

    const hotprops ={
        percent: 78, // is require
        colorSlice: '#EFB661',
        colorCircle: "rgb(174 174 192 / 10%)",
        fontColor: '#EFB661',
        fontSize: "1.625em",
        fontWeight: 900,
        size: 108,
        boxShadow: 'inset 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 16%)',
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        inverse: false,
        round: false,
        number: true,
    }

    return (
        <>

            {(() => {
                switch (element.title) {
                    case 'cold':
                       return <div className="card cold light">
                        <div className="card__header">
                            <div className="row">
                                <h2 className="card__title">
                                    USDC Staking
                                </h2>
                                <span className="card__close" onClick={(()=>{
                                            deleteItem(element.id)
                                         })}>
                                     <span></span><span></span>
                                </span>
                            </div>
                        </div>
                        <div className="card__price">
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">Of total Investment</div>
                                <div className="card__wallet__usd">$ 100,000</div>
                            </div>
                        </div>
                        <div className="card__product__wrapper">
                            <div className="card__product__row">
                                <div className="card__product__title">
                                    USDC (Ethereum)
                                    <img src={arrow} width="10" height="6" alt=""
                                         className="card__product__arrow"/>
                                </div>
                                <div className="card__product__number">95</div>
                            </div>
                            <div className="card__product__row">
                                <div className="card__product__title">
                                    Staking
                                    <img src={arrow} width="10" height="6" alt=""
                                         className="card__product__arrow"/>
                                </div>
                                <div className="card__product__number empty">-</div>
                            </div>
                            <div className="card__product__row">
                                <div className="card__product__title">
                                    Compound
                                    <img src={arrow} width="10" height="6" alt=""
                                         className="card__product__arrow"/>
                                </div>
                                <div className="card__product__number">80</div>
                            </div>
                        </div>
    
                        <div className="card__risk">
                            <h3 className="card__risk__title">Product Risk</h3>
                            <div className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                <p className="card__risk__alert__title">Alert</p>
                                <p className="card__risk__alert__number">{value}</p>
                            </div>
                            
                            <div className="card__risk__chart">
                                <CircularProgressBar {...coldprops}>
                                    </CircularProgressBar>
                            </div>
                            <div className="card__risk__info">
                                <i className="icon-info-icon"></i>
                            </div>
                            <div className="card__risk__range active">
                                  {
                                    openProgress ? <div className="card__risk__range__hr active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div> : null
                                }
                            </div>
                        </div>
                        <div className="unstacking">
                            Auto Unstacking
                            <span>30</span>
                        </div>
                    </div>
                    case 'hold':
                        return <div className="card hold light">
                            <div className="card__header">
                                <div className="row">
                                    <h2 className="card__title">
                                        USDC Staking
                                    </h2>
                                    <span className="card__close"  onClick={(()=>{
                                            deleteItem(element.id)
                                         })}>
                                        <span></span><span></span>
                                    </span>
                                </div>
                            </div>
                            <div className="card__price">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">Of total Investment</div>
                                    <div className="card__wallet__usd">$ 100,000</div>
                                </div>
                            </div>
                            <div className="card__product__wrapper">
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        USDC (Ethereum)
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number">95</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        Staking
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number empty">-</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        Compound
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number">80</div>
                                </div>
                            </div>

                            <div className="card__risk">
                                <h3 className="card__risk__title">Product Risk</h3>
                                <div  className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                <div className="card__risk__chart">
                                <CircularProgressBar {...hotprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
                                </div>
                                <div className="card__risk__range active">
                                {
                                    openProgress ? <div className="card__risk__range__hr active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div> : null
                                }
                                </div>
                            </div>
                            <div className="unstacking">
                                Auto Unstacking
                                <span>30</span>
                            </div>
                        </div>
                    case 'risk':
                        return <div className="card risky light">
                            <div className="card__header">
                                <div className="row">
                                    <h2 className="card__title">
                                        USDC Staking
                                    </h2>
                                    <span className="card__close"  onClick={(()=>{
                                            deleteItem(element.id)
                                         })}>
                                        <span></span><span></span>
                                    </span>
                                </div>
                            </div>
                            <div className="card__price">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">Of total Investment</div>
                                    <div className="card__wallet__usd">$ 100,000</div>
                                </div>
                            </div>
                            <div className="card__product__wrapper">
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        USDC (Ethereum)
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number">95</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        Staking
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number empty">-</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">
                                        Compound
                                        <img src={arrow} width="10" height="6" alt=""
                                            className="card__product__arrow" />
                                    </div>
                                    <div className="card__product__number">80</div>
                                </div>
                            </div>

                            <div className="card__risk">
                                <h3 className="card__risk__title">Product Risk</h3>
                                <div className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                <div className="card__risk__chart">
                                <CircularProgressBar {...riskprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
                                </div>
                                <div className="card__risk__range active">
                                {
                                    openProgress ? <div className="card__risk__range__hr active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div> : null
                                }
                                </div>
                            </div>
                            <div className="unstacking">
                                Auto Unstacking
                                <span>30</span>
                            </div>
                        </div>
                }
            })()}






        </>
    )
}