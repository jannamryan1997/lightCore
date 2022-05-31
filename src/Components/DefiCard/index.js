import {React} from 'react';

export function DefiCard(){
    return(
        <>
           <div className="card cold defi">
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
                    <div className="card__product__stake__block">
                        <button className="card__product__stake">Stake</button>
                        <button className="card__product__unstacked">Unstake</button>
                        <div className="card__product__stake__amount open">
                            <div className="card__product__stake__amount__input__wrapper">
                                <input placeholder="Amount" type="text" className="card__product__stake__amount__input"/>
                            </div>
                            <button className="card__product__stake__amount__max">Max Amount</button>
                            <button className="card__product__stake__amount__confirm">Confirm</button>
                        </div>
                    </div>
                    <div className="card__risk">
                        <h3 className="card__risk__title">Product Risk</h3>
                        <div className="card__risk__alert">
                            <p className="card__risk__alert__title">Alert</p>
                            <p className="card__risk__alert__number">60</p>
                        </div>
                        <div className="card__risk__chart">
                            <div className="card__risk__chart__min">
                                <p className="card__risk__chart__number">87</p>
                                <p className="card__risk__chart__number__of">of 100</p>
                            </div>
                        </div>
                        <div className="card__risk__info">
                            <i className="icon-info-icon"></i>
                        </div>
                    </div>
                    <div className="unstacking active">
                        Auto Unstacking 
                        <span>30</span>
                    </div>
                </div>
                <div className="card cold defi">
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
                    <div className="card__product__stake__block">
                        <button className="card__product__stake">Stake</button>
                        <button className="card__product__unstacked">Unstake</button>
                        <div className="card__product__stake__amount">
                            <div className="card__product__stake__amount__input__wrapper">
                                <input placeholder="Amount" type="text" className="card__product__stake__amount__input"/>
                            </div>
                            <button className="card__product__stake__amount__max">Max Amount</button>
                            <button className="card__product__stake__amount__confirm">Confirm</button>
                        </div>
                    </div>
                    <div className="card__risk">
                        <h3 className="card__risk__title">Product Risk</h3>
                        <div className="card__risk__alert">
                            <p className="card__risk__alert__title">Alert</p>
                            <p className="card__risk__alert__number">60</p>
                        </div>
                        <div className="card__risk__chart">
                            <div className="card__risk__chart__min">
                                <p className="card__risk__chart__number">87</p>
                                <p className="card__risk__chart__number__of">of 100</p>
                            </div>
                        </div>
                        <div className="card__risk__info">
                            <i className="icon-info-icon"></i>
                        </div>
                    </div>
                    <div className="unstacking active">
                        Auto Unstacking
                        <span>30</span>
                    </div>
                </div>
                <div className="card hold defi">
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
                    <div className="card__product__stake__block">
                        <button className="card__product__stake">Stake</button>
                        <button className="card__product__unstacked">Unstake</button>
                        <div className="card__product__stake__amount">
                            <div className="card__product__stake__amount__input__wrapper">
                                <input placeholder="Amount" type="text" className="card__product__stake__amount__input"/>
                            </div>
                            <button className="card__product__stake__amount__max">Max Amount</button>
                            <button className="card__product__stake__amount__confirm">Confirm</button>
                        </div>
                    </div>
                    <div className="card__risk">
                        <h3 className="card__risk__title">Product Risk</h3>
                        <div className="card__risk__alert">
                            <p className="card__risk__alert__title">Alert</p>
                            <p className="card__risk__alert__number">60</p>
                        </div>
                        <div className="card__risk__chart">
                            <div className="card__risk__chart__min">
                                <p className="card__risk__chart__number">87</p>
                                <p className="card__risk__chart__number__of">of 100</p>
                            </div>
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
        </>
    )
}