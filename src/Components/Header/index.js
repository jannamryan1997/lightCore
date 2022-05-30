import { React } from 'react';

import user from '../../Assets/img/user/avatar.png';

export function Header() {
    return (
        <header id="header" className="header">
            <div className="row">
                <h2 className="header__title">Wallets Shield</h2>
                <div className="header__right">
                    <div className="notification">
                        <div className="notification__btn">
                            <i className="icon-notification"></i>
                            <span className="notification__status"></span>
                        </div>
                    </div>
                    <div className="user">
                        <img src={user} alt="" className="user__avatar" />
                        <p className="user__name">Elon Musk</p>
                    </div>
                    <div className="setting__btn">
                        <i className="icon-setting"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}