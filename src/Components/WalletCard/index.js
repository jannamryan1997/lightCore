import { React, useEffect } from 'react';

export function WalletCard({ element,deleteItem }) {
    return (
        <>
            {(() => {
                switch (element.title) {
                    case 'cold':
                        return <div className="card cold">
                            <div className="card__header">
                                <div className="row">
                                    <div className="card__settings">
                                        <i className="icon-setting"></i>
                                    </div>
                                    <h2 className="card__title">
                                        Cold Wallet 2
                                        <span className="card__title__type">(Trezor)</span>
                                    </h2>
                                    <span className="card__close" onClick={(()=>{
                                      deleteItem(element?.id)  
                                    })}>
                                        <span></span><span></span>
                                    </span>
                                </div>
                            </div>
                            <div className="card__price">
                                $ 28,888,000
                            </div>
                            <div className="card__wallet">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">201.110 BTC</div>
                                    <div className="card__wallet__usd">$ 8,352,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">1,001.554 ETH</div>
                                    <div className="card__wallet__usd">$ 3,126,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">3,500,000 USDT</div>
                                    <div className="card__wallet__usd">$ 3,500,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">201.110 BTC</div>
                                    <div className="card__wallet__usd">$ 8,352,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">1,001.554 ETH</div>
                                    <div className="card__wallet__usd">$ 3,126,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">3,500,000 USDT</div>
                                    <div className="card__wallet__usd">$ 3,500,000</div>
                                </div>
                            </div>
                            <div className="card__risk">
                                <h3 className="card__risk__title">Wallet Risk</h3>
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
                        </div>
                    case 'hold':
                        return  <div className="card hold">
                        <div className="card__header">
                            <div className="row">
                                <div className="card__settings">
                                    <i className="icon-setting"></i>
                                </div>
                                <h2 className="card__title">
                                    Cold Wallet 2
                                    <span className="card__title__type">(Trezor)</span>
                                </h2>
                                <span className="card__close" onClick={(()=>{
                                      deleteItem(element?.id)  
                                    })}>
                                    <span></span><span></span>
                                </span>
                            </div>
                        </div>
                        <div className="card__price">
                            $ 28,888,000
                        </div>
                        <div className="card__wallet">
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">201.110 BTC</div>
                                <div className="card__wallet__usd">$ 8,352,000</div>
                            </div>
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">1,001.554 ETH</div>
                                <div className="card__wallet__usd">$ 3,126,000</div>
                            </div>
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">3,500,000 USDT</div>
                                <div className="card__wallet__usd">$ 3,500,000</div>
                            </div>
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">201.110 BTC</div>
                                <div className="card__wallet__usd">$ 8,352,000</div>
                            </div>
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">1,001.554 ETH</div>
                                <div className="card__wallet__usd">$ 3,126,000</div>
                            </div>
                            <div className="card__wallet__row">
                                <div className="card__wallet__rates">3,500,000 USDT</div>
                                <div className="card__wallet__usd">$ 3,500,000</div>
                            </div>
                        </div>
                        <div className="card__risk">
                            <h3 className="card__risk__title">Wallet Risk</h3>
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
                    </div>
                    case 'risk':
                        return <div className="card risky">
                            <div className="card__header">
                                <div className="row">
                                    <div className="card__settings">
                                        <i className="icon-setting"></i>
                                    </div>
                                    <h2 className="card__title">
                                        Cold Wallet 2
                                        <span className="card__title__type">(Trezor)</span>
                                    </h2>
                                    <span className="card__close" onClick={(()=>{
                                      deleteItem(element?.id)  
                                    })}>
                                        <span></span><span></span>
                                    </span>
                                </div>
                            </div>
                            <div className="card__price">
                                $ 28,888,000
                            </div>
                            <div className="card__wallet">
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">201.110 BTC</div>
                                    <div className="card__wallet__usd">$ 8,352,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">1,001.554 ETH</div>
                                    <div className="card__wallet__usd">$ 3,126,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">3,500,000 USDT</div>
                                    <div className="card__wallet__usd">$ 3,500,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">201.110 BTC</div>
                                    <div className="card__wallet__usd">$ 8,352,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">1,001.554 ETH</div>
                                    <div className="card__wallet__usd">$ 3,126,000</div>
                                </div>
                                <div className="card__wallet__row">
                                    <div className="card__wallet__rates">3,500,000 USDT</div>
                                    <div className="card__wallet__usd">$ 3,500,000</div>
                                </div>
                            </div>
                            <div className="card__risk">
                                <h3 className="card__risk__title">Wallet Risk</h3>
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
                        </div>

                }
            })()}
        </>
    )
}