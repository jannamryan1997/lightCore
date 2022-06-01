import { React } from 'react';
import {Header} from '../../../Components/index';
import user from '../../../Assets/img/user/Elon_Musk.png';
import qrcode from '../../../Assets/img/password/password.png';

export function Settings() {
    return (
    <>
      <Header title={'Settings'}/>
      <main className="main" >
        <div className="setting" style={{overflowX: 'hidden'}}>
            <div className="row">
                <div className="user__info">
                    <div className="user__info__avatar__block">
                        <div className="user__info__avatar__wrapper">
                            <img src={user} alt="" className="user__info__avatar"/>
                        </div>
                    </div>
                    <div className="user__info__desc__block">
                        <div className="user__info__name">Elon Musk</div>
                        <div className="user__info__desc">
                            <div className="user__info__desc__text">
                                Elon Reeve Musk FRS is an entrepreneur, investor, and business magnate. He is the
                                founder,
                                CEO, and chief engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla,
                                Inc.; founder of The Boring Company; and, co-founder of Neuralink and OpenAI.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__settings">
                    <h3 className="login__settings__title">Login Settings</h3>
                    <form action="#" className="password__change__block">
                        <h4 className="password__change__block__title">Password change</h4>
                        <input placeholder="Old Password" type="text" className="password__change__input"/>
                        <input placeholder="New Password" type="text" className="password__change__input"/>
                        <input placeholder="New Password" type="text" className="password__change__input"/>
                        <button className="password__change__btn">Apply</button>
                    </form>
                    <form action="#" className="password__change__block">
                        <h4 className="password__change__block__title">2FA change</h4>
                        <input placeholder="Password" type="text" className="password__change__input"/>
                        <input placeholder="Old 2FA Code" type="text" className="password__change__input"/>
                        <button className="password__change__btn">Generate New 2FA QR</button>
                        <div className="qr__wrapper">
                            <img src={qrcode} alt="" className="qr__img"/>
                        </div>
                    </form>
                </div>
                <div className="login__settings login__settings_notification">
                    <h3 className="login__settings__title">Notification Settings</h3>
                    <form action="#" className="password__change__block">
                        <h4 className="password__change__block__title">Alerts will be send</h4>
                        <input placeholder="ciso@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                        <input placeholder="liron@company.com" type="text" className="password__change__input"/>
                    </form>

                </div>
            </div>
        </div>
    </main>
    </>)
}