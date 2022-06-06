import { React, useState } from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export function WalletCard({ element, deleteItem }) {
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

    const holdprops = {
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
                                    <span className="card__close" onClick={(() => {
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
                                <div className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
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
                                {openProgress ?
                                    // <div className="card__risk__range active">
                                    //     <div className="card__risk__range__bg"></div>
                                    //     <div className="card__risk__range__btn">
                                    //         <div className="card__risk__range__btn__min"></div>
                                    //     </div>
                                    // </div> 
                                    <div  className="card__risk__range active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    : null}
                            </div>


                        </div>
                    case 'hold':
                        return <div className="card hold">
                            <div className="card__header">
                                <div className="row">
                                    <div className="card__settings">
                                        <i className="icon-setting"></i>
                                    </div>
                                    <h2 className="card__title">
                                        Cold Wallet 2
                                        <span className="card__title__type">(Trezor)</span>
                                    </h2>
                                    <span className="card__close" onClick={(() => {
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
                                <div    className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                <div className="card__risk__chart">
                                    <CircularProgressBar {...holdprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
                                </div>
                                {openProgress ?
                                    <div  className="card__risk__range active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    : null}

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
                                    <span className="card__close" onClick={(() => {
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
                                <div   className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} 
                                onClick={(() => {
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title" >Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                <div className="card__risk__chart">
                                    <CircularProgressBar {...riskprops}>
                                    </CircularProgressBar>
                                </div>
                                <div className="card__risk__info">
                                    <i className="icon-info-icon"></i>
                                </div>
                                {openProgress ?
                                    <div  className="card__risk__range active">
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={value}
                                            orientation='vertical'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    : null}
                            </div>
                        </div>

                }
            })()}
        </>
    )
}