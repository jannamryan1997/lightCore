import { React, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Header, Sider } from '../../Components';
import { AddWallet } from '../../Modal/index';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
    },
};

export function Main() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    return (
        <div className="wrapper">
            <>
                <Sider />
            </>
            <>
                <Header />
            </>
            <main className="main">
                <Outlet />
                <aside className="aside">
                    <a href="#" className="add__wallet__btn" onClick={openModal}>
                        <span className="add__wallet__btn__plus">
                            <span className="add__wallet__btn__plus__bg">
                                <span></span><span></span>
                            </span>
                        </span>
                        Add Wallet</a>
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
                            <div className="aside__card__progress__bg" style={{ width: '93%' }}></div>
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
                            <div className="aside__card__progress__bg" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </aside>
            </main>
            {/* <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                className="add_wallet_modal_container"
                contentLabel="Example Modal"
            >
                <div className="modal__wrapper">
                    <div className="modal">
                        <AddWallet />
                    </div>
                    </div>


            </Modal> */}
        </div>
    )
}