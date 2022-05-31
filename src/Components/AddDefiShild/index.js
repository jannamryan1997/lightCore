import { React } from 'react';

import fox from '../../Assets/img/icons/fox.png';
import coinbase from '../../Assets/img/icons/coinbase.png';

export function AddDefiShild() {
    return (

        <aside className="aside">
            <a href="#" className="add__wallet__btn defi">
                <span className="add__wallet__btn__plus">
                    <img src={fox} alt="" className="fox"/>
                        <img src={coinbase} alt="" className="coinbase"/>
                        </span>
                        Wallet Connect
                    </a>
                    <h3 className="aside__wallet__title">Wallets Risk</h3>
                    <div className="aside__chart__wrapper cold">
                        <div className="card__risk__chart">
                            <div className="card__risk__chart__min">
                                <p className="card__risk__chart__number">78</p>
                                <p className="card__risk__chart__number__of">of 100</p>
                            </div>
                        </div>
                        <div className="card__risk__alert">
                            <p className="card__risk__alert__title">Alert</p>
                            <p className="card__risk__alert__number">50</p>
                        </div>
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
                            <div className="aside__card__progress__bg" style={{width: '93%'}}></div>
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
                            <div className="aside__card__progress__bg" style={{width: '65%'}}></div>
                        </div>
                    </div>
                </aside>

                )
}