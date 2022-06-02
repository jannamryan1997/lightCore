import { React, useState } from 'react';

import arrow from '../../Assets/img/icons/arrow.svg';


import { AddWalletCard } from '../../Components/index';

export function AddWallet({ closeModal }) {

    const [addWalletCard, setAddWalletCard] = useState([{ id: 1 }]);

    return (

        <div className="modal__wrapper">
            <div className="modal">
                <div className="modal__header">
                    {/* <!--Todo react select  https://react-select.com/home--> */}
                    <div className="wallet__type">
                        <img src={arrow} alt="" className="wallet__type__arrow" />
                        <div className="wallet__type__item selected">Cold Wallet</div>
                       
                                {/* <div className="wallet__type__item">Hot Wallet</div>  */}
                    </div>
                    <div className="wallet__type__btn">Trezor</div>
                    <button className="wallet__type__save" onClick={(() => {
                        closeModal(false)
                    })}>SAVE</button>

                </div>
                {
                    addWalletCard.map((element) => {
                        return <AddWalletCard key={element.id} element={element} deleteItem={((id) => {
                            setAddWalletCard(addWalletCard.filter((element) => element.id != id))
                       
                        })} />
                    })
                }
                <span className="add__wallet__btn__plus" style={{margin:'200px auto 0',cursor:'pointer'}} onClick={(()=>{
                    setAddWalletCard([...addWalletCard,{id:addWalletCard.length+1}])
                })}>
                <span className="add__wallet__btn__plus__bg">
                    <span></span><span></span>
                </span>
            </span>
            </div>
            
        </div>
    )
}