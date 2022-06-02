import { React, useState } from 'react';

import copy from '../../Assets/img/icons/copy.svg';
import arrow from '../../Assets/img/icons/arrow.svg';

import { WhitelistForm } from '../../Components';
import OutsideClickHandler from 'react-outside-click-handler';


export function AddWalletCard({ element, deleteItem }) {

    const [whiteListIsOpen, setWhiteListIsOpen] = useState(false);
    const [addWhiteLidtForm, setAddWhiteLidtForm] = useState([{ id: 1 }]);
    const [limitBlockIsOpen, setLimitBlockIsOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [openWalletForm, setOpenWalletForm] = useState(false);
    const [WalletFormValue, setWalletFormValue] = useState([
        { id: 1, value: 'Hot Wallet 1 Trezor BTC' },
        { id: 2, value: 'Cold Wallet 1 Trezor EPH' },
        { id: 3, value: 'Hot Wallet 2 Trezor BTC' },
        { id: 4, value: 'Cold Wallet 2 Trezor EPH' },
    ]);

    const [copyFormValue, setCopyFormValue] = useState('Copy from Wallet');

    const [openAssetsvalue, setOpenAssetsvalue] = useState(false);
    const [assetsValue, setAssetsValue] = useState('BTC');
    const [assetsItem, setAssetsItem] = useState([{ id: 1, value: 'Hot Wallet', }, { id: 2, value: 'Cold Wallet' }, { id: 2, value: 'BTC' }]);

    return (
        <div className="modal__body">
            <div className="wallet__addresses">
                <div className="wallet__addresses__top">
                    <span className="card__close" onClick={(() => {
                        deleteItem(element?.id)
                    })}>
                        <span></span><span></span>
                    </span>
                    <OutsideClickHandler onOutsideClick={(event) => {
                        event.stopPropagation()
                        setOpenAssetsvalue(false)
                    }}>
                        <div className="wallet__addresses__top__left">
                            <div className="wallet__addresses__top__label">Asset</div>
                            <div className="wallet__type"onClick={(() => {
                                    setOpenAssetsvalue(!openAssetsvalue)
                                })}>
                                <img src={arrow} alt="" className="wallet__type__arrow"  />
                                <div className="wallet__type__item selected">{assetsValue}</div>
                                {
                                    openAssetsvalue ?
                                        <> {
                                            assetsItem.map((element) => {
                                                return <div className="wallet__type__item" key={Math.random()} onClick={(() => {
                                                    setAssetsValue(element?.value)
                                                })}>{element?.value}</div>
                                            })
                                        }
                                        </> : null
                                }

                            </div>
                        </div>
                    </OutsideClickHandler>

                    <div className="wallet__addresses__top__middle">
                        <div className="wallet__addresses__top__label">Wallet Addresses</div>
                        <div className="wallet__addresses__top__input__wrapper">
                            <input type="text" className="wallet__addresses__top__input" />
                        </div>
                        <div className="wallet__addresses__top__input__wrapper">
                            <span className="wallet__addresses__top__input__add">
                                <span></span><span></span>
                            </span>
                            <input type="text" className="wallet__addresses__top__input" />
                        </div>
                    </div>
                    <div className="wallet__addresses__top__right">
                        <button className="wallet__addresses__top__right__btn" onClick={(() => {
                            setWhiteListIsOpen(!whiteListIsOpen)
                        })}>Whitelist</button>
                    </div>
                    {
                        whiteListIsOpen ?
                            <div className="whitelist__ad__block">
                                <div className="row">
                                    {
                                        addWhiteLidtForm.map((element) => {
                                            return <WhitelistForm key={element?.id} />
                                        })
                                    }

                                    <div className="whitelist__ad__block__bottom">
                                        <span className="add__wallet__btn__plus__bg" onClick={(() => {
                                            setAddWhiteLidtForm([...addWhiteLidtForm, {
                                                id: addWhiteLidtForm.length + 1
                                            }])
                                        })}>
                                            <span></span><span></span>
                                        </span>
                                        <OutsideClickHandler onOutsideClick={(event) => {
                                            event.stopPropagation()
                                            setOpenForm(false)
                                        }}>
                                            <div className={'dropdown' + ' ' + (openForm ? 'open' : 'dropdown')}>

                                                <div className="dropdown__selected" onClick={((event) => {
                                                    event.stopPropagation()
                                                    setOpenForm(!openForm)

                                                })}>
                                                    Copy from
                                                    <img src={arrow} alt="" className="dropdown__arrow" />
                                                </div> {
                                                    openForm ?

                                                        <div className="dropdown__body">
                                                            <div className="dropdown__copy">
                                                                Copy from File
                                                                <div className="dropdown__copy__icon__wrapper">
                                                                    <img src={copy} alt="" className="dropdown__copy__icon" />
                                                                </div>
                                                            </div>
                                                            <div className="dropdown__sub">
                                                                <div className={'dropdown__sub__selected' + ' ' + (openWalletForm ? 'open' : 'dropdown__sub__selected')} onClick={(() => {
                                                                    setOpenWalletForm(!openWalletForm)
                                                                })}>
                                                                    {copyFormValue}
                                                                    <img src={arrow} alt="" className="dropdown__arrow" />
                                                                </div>
                                                                {
                                                                    openWalletForm ?
                                                                        <div className="dropdown__sub__body" >
                                                                            {
                                                                                WalletFormValue.map((element) => {
                                                                                    return <div className="dropdown__sub__item" key={element.id}
                                                                                        onClick={() => {
                                                                                            setCopyFormValue(element.value)
                                                                                        }}
                                                                                    >{element.value}</div>
                                                                                })
                                                                            }
                                                                        </div> : null
                                                                }

                                                            </div>
                                                        </div>
                                                        : null}

                                            </div>
                                        </OutsideClickHandler>
                                    </div>
                                </div>
                            </div> : null
                    }
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
                                <div className="limit__block__top active" onClick={() => {
                                    setLimitBlockIsOpen(!limitBlockIsOpen)
                                }}>
                                    {/* <!--TODO react-circle-slider https://www.npmjs.com/package/react-circle-slider-->  */}
                                    {limitBlockIsOpen ?
                                        <div className="limit__block__top__slider">
                                            <div className="limit__block__top__slider__info">
                                                <div className="limit__block__top__slider__info__time">5h 30m</div>
                                                <div className="limit__block__top__slider__info__time__of">of 24h</div>
                                            </div>
                                        </div>
                                        : null
                                    }
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
                            <input id="anomalies__check" type="checkbox" className="anomalies__check" />
                            {/* <label className="anomalies__label"> */}
                            <label for="anomalies__check" className="anomalies__label">
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
    )
}