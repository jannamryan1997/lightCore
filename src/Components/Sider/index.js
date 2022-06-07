import { React } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../Assets/img/site/logo.svg';
import trash from '../../Assets/img/icons/trash.svg';


export function Sider() {
    return (
        <section>
        <nav className="nav">
            <figure className="logo">
                <a href="#" className="logo__link">
                    <img width="32" height="36" src={logo} alt="" className="logo__img" />
                </a>
            </figure>
            <ul className="nav__block">
                <li className="nav__list">
                <NavLink  activeClassName="active" to='/wallet-shield'  className="nav__link" >
                <i className="icon-wallet"></i>
                </NavLink >
                </li>
                <li className="nav__list">
                     <NavLink  activeClassName="active" to='/defi-shield'  className="nav__link" >
                     <i className="icon-dfi-shield"></i>
                </NavLink>
                </li>
                <li className="nav__list">
                      <NavLink activeClassName="active" to='light-defi'  className="nav__link"  >
                      <i className="icon-investment"></i>
                </NavLink>
                </li>
                <li className="nav__list">
                       <NavLink activeClassName="active" to='/'  className="nav__link"  >
                       <i className="icon-nft"></i>
                </NavLink>
                </li>
                <li className="nav__list trash">
                    <a href="#" className="nav__link">
                        <img width="25" height="25" src={trash} className="trash__icon" alt="" />
                        {/* <!--<img src="img/icons/trash__active.svg" className="trash__icon" alt="">--> */}
                    </a>
                </li>
            </ul>
        </nav>
         </section>
    )
}