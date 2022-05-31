import { React, useState } from 'react';

import top from '../../../Assets/img/icons/to__top.svg';

import { WalletCard } from '../../../Components';

import { Aside,Header} from '../../../Components';
import { AddWallet } from '../../../Modal/index';
import Modal from 'react-modal';


export function WalletsShield() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
        },
    };
    
    const [walletCard, setWalletCard] = useState([
        { id: 1, title: 'cold' },
        { id: 2, title: 'cold' },
        { id: 3, title: 'cold' },
        { id: 4, title: 'cold' },
        { id: 5, title: 'hold' },
        { id: 6, title: 'hold' },
        { id: 7, title: 'hold' },
        { id: 8, title: 'hold' },
        { id: 9, title: 'risk' },
        { id: 10, title: 'risk' },
        { id: 11, title: 'risk' },
        { id: 12, title: 'risk' },
    ]);

    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>
             <Header title={'Wallets Shield'}/>
             <main className="main">
            <div className="content">
                <div className="row">
                    {/* <!--Todo react-circular-progressbar  https://www.npmjs.com/package/react-circular-progressbar--> */}
                    {
                        walletCard.map((element) => {
                            return <WalletCard key={element?.id} element={element} deleteItem={((id) => {
                                console.log(id);
                                setWalletCard(walletCard.filter((element) => element.id != id))
                            })} />
                        })
                    }

                </div>
                <a href="#header" className="to__top">
                    <img src={top} alt="top" className="to__top__icon" />
                </a>
            </div>
            
            <Aside openModal={((event)=>{
                 setIsOpen(event);
             })}/>
              <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <AddWallet  closeModal={((event)=>{
                              setIsOpen(event);
                    })}/>
                </Modal>
                </main>
        </>
    )
}