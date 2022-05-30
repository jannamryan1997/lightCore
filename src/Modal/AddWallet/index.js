import {React} from 'react';

import arrow from '../../Assets/img/icons/arrow.svg';
import copy from '../../Assets/img/icons/copy.svg';

export function AddWallet(){
    return (
       <>
        <div className="modal__header">
                {/* <!--Todo react select  https://react-select.com/home--> */}
                <div className="wallet__type">
                    <img src={arrow} alt="" className="wallet__type__arrow"/>
                    <div className="wallet__type__item selected">Cold Wallet</div>
                    {/* <!--<div className="wallet__type__item">Hot Wallet</div>--> */}
                </div>
                <div className="wallet__type__btn">Trezor</div>
                <button className="wallet__type__save">SAVE</button>

            </div>
        <div className="modal__body">
        <div className="wallet__addresses">
            <div className="wallet__addresses__top">
                <span className="card__close">
                    <span></span><span></span>
                </span>
                <div className="wallet__addresses__top__left">
                    <div className="wallet__addresses__top__label">Asset</div>
                    <div className="wallet__type">
                        <img src={arrow} alt="" className="wallet__type__arrow"/>
                        <div className="wallet__type__item selected">BTC</div>
                    </div>
                </div>
                <div className="wallet__addresses__top__middle">
                    <div className="wallet__addresses__top__label">Wallet Addresses</div>
                    <div className="wallet__addresses__top__input__wrapper">
                        <input type="text" className="wallet__addresses__top__input"/>
                    </div>
                    <div className="wallet__addresses__top__input__wrapper">
                        <span className="wallet__addresses__top__input__add">
                            <span></span><span></span>
                        </span>
                        <input type="text" className="wallet__addresses__top__input"/>
                    </div>
                </div>
                <div className="wallet__addresses__top__right">
                    <button className="wallet__addresses__top__right__btn">Whitelist</button>
                </div>
                <div className="whitelist__ad__block">
                    <div className="row">
                        <div className="whitelist__ad__block__input__wrapper">
                            <input type="text" className="whitelist__ad__block__input"/>
                        </div>
                        <div className="whitelist__ad__block__input__wrapper">
                            <input type="text" className="whitelist__ad__block__input"/>
                        </div>
                        <div className="whitelist__ad__block__bottom">
                            <span className="add__wallet__btn__plus__bg">
                <span></span><span></span>
            </span>
                            <div className="dropdown open">
                                <div className="dropdown__selected">
                                    Copy from
                                    <img src={arrow} alt="" className="dropdown__arrow"/>
                                </div>
                                <div className="dropdown__body">
                                    <div className="dropdown__copy">
                                        Copy from File
                                        <div className="dropdown__copy__icon__wrapper">
                                            <img src={copy} alt="" className="dropdown__copy__icon"/>
                                        </div>
                                    </div>
                                    <div className="dropdown__sub">
                                        <div className="dropdown__sub__selected open">
                                            Copy from Wallet
                                            <img src={arrow} alt="" className="dropdown__arrow"/>
                                        </div>
                                        <div className="dropdown__sub__body">
                                            <div className="dropdown__sub__item">Hot Wallet 1 Trezor BTC</div>
                                            <div className="dropdown__sub__item">Cold Wallet 1 Trezor EPH</div>
                                            <div className="dropdown__sub__item">Hot Wallet 2 Trezor BTC</div>
                                            <div className="dropdown__sub__item">Cold Wallet 2 Trezor EPH</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wallet__addresses__bottom">
                <div className="wallet__addresses__bottom__left">
                    <div className="limit__block">
                        <div className="limit__block__top">Balance limit</div>
                        <div className="limit__block__bottom">$ 5,000,000</div>
                    </div>
                </div>
                <div className="wallet__addresses__bottom__middle">
                    <ul className="limit__block__tabs">
                        <li className="limit__block__tabs__list">Whitelisted</li>
                        <li className="limit__block__tabs__list active">Not Whitelisted</li>
                    </ul>
                    <div className="limit__block__wrapper">

                        <div className="limit__block">
                            <div className="limit__block__top">Single Tx limit</div>
                            <div className="limit__block__bottom">$ 50,000</div>
                        </div>
                        <div className="limit__block">
                            <div className="limit__block__top active">
                                 {/* <!--TODO react-circle-slider https://www.npmjs.com/package/react-circle-slider-->  */}
                                <div className="limit__block__top__slider">
                                    <div className="limit__block__top__slider__info">
                                        <div className="limit__block__top__slider__info__time">5h 30m</div>
                                        <div className="limit__block__top__slider__info__time__of">of 24h</div>
                                    </div>
                                </div>
                                5h 30m limit
                            </div>
                            <div className="limit__block__bottom">$ 20,000</div>
                        </div>
                        <div className="limit__block">
                            <div className="limit__block__top">5h 30m limit</div>
                            <div className="limit__block__bottom">$ 30,000</div>
                        </div>
                    </div>
                </div>
                <div className="wallet__addresses__bottom__right">
                    <div className="anomalies__check__wrapper">
                        <input id="anomalies__check" type="checkbox" className="anomalies__check"/>
                          <label  className="anomalies__label">
                        {/* <label for="anomalies__check" className="anomalies__label"> */}
                                <span className="anomalies__text">
                                    Anomalies Detection
                                    <span className="anomalies__check__box"></span>
                                </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
    )
}