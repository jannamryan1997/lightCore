import {React,useState} from 'react';

import top from '../../../Assets/img/icons/to__top.svg';
import grid from '../../../Assets/img/icons/grid.svg';
import list from '../../../Assets/img/icons/list.svg';

import {Header,LightDefiCard,DeFiLightAside} from '../../../Components';


export function LightDeFi(){

    const [lightDefiCard, setlightDefiCard] = useState([
        { id: 1, title: 'cold' },
        { id: 2, title: 'hold' },
        { id: 3, title: 'risk' },
    ]);

    return (
        <>
                 <Header title={'Light DeFi'}/>
             <main className="main">
            <div className="content">
                <div className="row">
                    {
                        lightDefiCard.map((element) => {
                            return <LightDefiCard key={element?.id} element={element} deleteItem={((id) => {
                                setlightDefiCard(lightDefiCard.filter((element) => element.id != id))
                            })} />
                        })
                    }

                </div>
                <a href="#header" className="to__top">
                    <img src={top} alt="top" className="to__top__icon" />
                </a>
                <div className="layout__block">
                <div className="layout__grid">
                    <img src={grid} alt="" className="layout__grid__icon"/>
                </div>
                <div className="layout__list">
                    <img src={list} alt="" className="layout__list__icon"/>
                </div>
            </div>
            </div>
            <DeFiLightAside/>
                </main>
        </>
    )
}