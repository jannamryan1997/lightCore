import {React,useState} from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

export function DefiLightCurrentCard({element}){

    const [openProgress,setOpenProgress] = useState(false);
    const [value, setValue] = useState(70);

    const handleChange = (value) => {
        setValue(value)
    }

    return (
        <>
          {(() => {
                switch (element.value) {
                    case 'cold':
                        return <div className="aside__card cold">
                            <div className="row">
                                <div className="aside__card__left">
                                    <h3 className="aside__card__title">Cold Wallets Risk</h3>
                                    <p className="aside__card__numbers">93/<span>100</span></p>
                                </div>
                                <div className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} onClick={(()=>{
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                {
                    openProgress ? <div className="card__risk__range__hr active current__card">
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
                            <div className="aside__card__progress">
                                <div className="aside__card__progress__bg" style={{ width: '93%' }}></div>
                            </div>
                        </div>
                    case 'hot':
                        return <div className="aside__card hot">
                            <div className="row">
                                <div className="aside__card__left">
                                    <h3 className="aside__card__title">Hot Wallets Risk</h3>
                                    <p className="aside__card__numbers">65/<span>100</span></p>
                                </div>
                                <div  className={'card__risk__alert' + ' ' + (openProgress ? 'active' : 'card__risk__alert')} onClick={(()=>{
                                    setOpenProgress(!openProgress)
                                })}>
                                    <p className="card__risk__alert__title">Alert</p>
                                    <p className="card__risk__alert__number">{value}</p>
                                </div>
                                {
                    openProgress ? <div className="card__risk__range__hr active current__card">
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
                            <div className="aside__card__progress">
                                <div className="aside__card__progress__bg" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                }
            })()}
        </>
    )
}