import { React } from 'react';

import logo from '../../Assets/img/site/logo.svg';
import trash from '../../Assets/img/icons/trash.svg';


export function Sider() {
    return (
        <nav className="nav">
            <figure className="logo">
                <a href="#" className="logo__link">
                    <img width="32" height="36" src={logo} alt="" className="logo__img" />
                </a>
            </figure>
            <ul className="nav__block">
                <li className="nav__list">
                    <a href="#" className="nav__link active">
                        <i className="icon-wallet"></i>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__link">
                        <i className="icon-dfi-shield"></i>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__link">
                        <i className="icon-investment"></i>
                    </a>
                </li>
                <li className="nav__list">
                    <a href="#" className="nav__link">
                        <i className="icon-nft"></i>
                    </a>
                </li>
                <li className="nav__list trash">
                    <a href="#" className="nav__link">
                        <img width="25" height="25" src={trash} className="trash__icon" alt="" />
                        {/* <!--<img src="img/icons/trash__active.svg" className="trash__icon" alt="">--> */}
                    </a>
                </li>
            </ul>
        </nav>
    )
}