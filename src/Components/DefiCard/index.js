import { React, useState } from 'react';

import OutsideClickHandler from 'react-outside-click-handler';

import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';

export function DefiCard({ element }) {
    const [value, setValue] = useState(25);
    const [openProgress, setOpenProgress] = useState(false);
    const handleChange = (value) => {
        setValue(value)
       
    }

    const [openStake, setOpenStake] = useState(false);
    const [openRiskStake, setopenRiskStake] = useState(false);

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



    return (
        <>

            {(() => {
                switch (element.title) {
                    case 'cold':
                        return <div className="card cold defi">
                            <div className="card__header">
                                <div className="row">
                                    <h2 className="card__title">
                                        USDC Staking
                                    </h2>
                                    <div className="card__apy">
                                        <h4 className="card__apy__title">APY </h4>
                                        <p className="card__apy__percent">1%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card__price">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">Staked amount</div>
                                    <div className="card__wallet__usd">$ 100,000</div>
                                </div>
                            </div>
                            <div className="card__product__wrapper">
                                <div className="card__product__row">
                                    <div className="card__product__title">USDC (Ethereum)</div>
                                    <div className="card__product__number">95</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">USDC (Ethereum)</div>
                                    <div className="card__product__number">95</div>
                                </div>
                            </div>
                            <OutsideClickHandler onOutsideClick={(event) => {
                                event.stopPropagation()
                                setOpenStake(false)
                            }}>
                                <div className="card__product__stake__block">
                                    <button className={'card__product__stake' + ' ' + (openStake ? 'card__product__stake_active' : 'card__product__stake')} onClick={(() => {
                                        setOpenStake(!openStake)
                                    })}>Stake</button>
                                    <button className="card__product__unstacked">Unstake</button>
                                    {openStake ?
                                        <div className="card__product__stake__amount open">
                                            <div className="card__product__stake__amount__input__wrapper">
                                                <input placeholder="Amount" type="text" className="card__product__stake__amount__input" />
                                            </div>
                                            <button className="card__product__stake__amount__max">Max Amount</button>
                                            <button className="card__product__stake__amount__confirm">Confirm</button>
                                        </div> : null
                                    }

                                </div>
                            </OutsideClickHandler>
                            <div className="card__risk">
                                <h3 className="card__risk__title">Product Risk</h3>
                                <div  className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={((event) => {
                                    setOpenProgress(!openProgress)
                                    event.stopPropagation()
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                {
                                    openProgress ? 
                                    <div className="card__risk__range__hr active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div> : null
                                }
                                <div className="card__risk__chart">
                                    {/* <div className="card__risk__chart__min">
                                        <p className="card__risk__chart__number">87</p>
                                        <p className="card__risk__chart__number__of">of 100</p>
                                    </div> */}
                                    <CircularProgressBar {...coldprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
                                </div>
                            </div>
                            <div className="unstacking active">
                                Auto Unstacking
                                <span>30</span>
                            </div>
                        </div>;
                    case 'risk':
                        return <div className="card hold defi">
                            <div className="card__header">
                                <div className="row">
                                    <h2 className="card__title">
                                        USDC Staking
                                    </h2>
                                    <div className="card__apy">
                                        <h4 className="card__apy__title">APY </h4>
                                        <p className="card__apy__percent">1%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card__price">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">Staked amount</div>
                                    <div className="card__wallet__usd">$ 100,000</div>
                                </div>
                            </div>
                            <div className="card__product__wrapper">
                                <div className="card__product__row">
                                    <div className="card__product__title">USDC (Ethereum)</div>
                                    <div className="card__product__number">95</div>
                                </div>
                                <div className="card__product__row">
                                    <div className="card__product__title">USDC (Ethereum)</div>
                                    <div className="card__product__number">95</div>
                                </div>
                            </div>
                            <OutsideClickHandler onOutsideClick={(event) => {
                                event.stopPropagation()
                                setopenRiskStake(false)
                            }}>
                                <div className="card__product__stake__block">
                                    <button className={'card__product__stake' + ' ' + (openRiskStake ? 'card__product__stake_active' : 'card__product__stake')}
                                        onClick={((event) => {
                                            event.stopPropagation()
                                            setopenRiskStake(!openRiskStake)
                                        })}>Stake</button>
                                    <button className="card__product__unstacked">Unstake</button>
                                    {openRiskStake ?
                                        <div className="card__product__stake__amount open">
                                            <div className="card__product__stake__amount__input__wrapper">
                                                <input placeholder="Amount" type="text" className="card__product__stake__amount__input" />
                                            </div>
                                            <button className="card__product__stake__amount__max">Max Amount</button>
                                            <button className="card__product__stake__amount__confirm">Confirm</button>
                                        </div> : null
                                    }

                                </div>
                            </OutsideClickHandler>
                            <div className="card__risk">
                                <h3 className="card__risk__title">Product Risk</h3>
                                <div   className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={((event) => {
                                    event.stopPropagation()
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
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div> : null
                                }
                                <div className="card__risk__chart">
                                    {/* <div className="card__risk__chart__min">
                                        <p className="card__risk__chart__number">87</p>
                                        <p className="card__risk__chart__number__of">of 100</p>
                                    </div> */}
                                    <CircularProgressBar {...riskprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
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