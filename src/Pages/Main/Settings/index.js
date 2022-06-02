import { React } from 'react';
import { Header } from '../../../Components/index';
import user from '../../../Assets/img/user/Elon_Musk.png';
import qrcode from '../../../Assets/img/password/password.png';
import plus from '../../../Assets/img/icons/plus.png';
import email from '../../../Assets/img/icons/email.png';
import check from '../../../Assets/img/icons/check__icon.png';
import slack from '../../../Assets/img/icons/slack.png';
import telegram from '../../../Assets/img/icons/telegram.png';
import whatsap from '../../../Assets/img/icons/whatsap.png';
import sms from '../../../Assets/img/icons/sms.png';
import phone from '../../../Assets/img/icons/phone.png';

export function Settings() {
    return (
        <>
            <Header title={'Settings'} />
            <main class="main">
                <div class="setting" style={{ overflowX: 'hidden' }}>
                    <div class="row">
                        <div class="user__info">
                            <div class="user__info__avatar__block">
                                <div class="user__info__avatar__wrapper">
                                    <img src={user} alt="" class="user__info__avatar" />
                                </div>
                            </div>
                            <div class="user__info__desc__block">
                                <div class="user__info__name">Elon Musk</div>
                                <div class="user__info__desc">
                                    <div class="user__info__desc__text">
                                        Elon Reeve Musk FRS is an entrepreneur, investor, and business magnate. He is the
                                        founder,
                                        CEO, and chief engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla,
                                        Inc.; founder of The Boring Company; and, co-founder of Neuralink and OpenAI.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="login__settings">
                            <h3 class="login__settings__title">Login Settings</h3>
                            <form action="#" class="password__change__block">
                                <h4 class="password__change__block__title">Password change</h4>
                                <input placeholder="Old Password" type="text" class="password__change__input" />
                                <input placeholder="New Password" type="text" class="password__change__input" />
                                <input placeholder="New Password" type="text" class="password__change__input" />
                                <button class="password__change__btn">Apply</button>
                            </form>
                            <form action="#" class="password__change__block">
                                <h4 class="password__change__block__title">2FA change</h4>
                                <input placeholder="Password" type="text" class="password__change__input" />
                                <input placeholder="Old 2FA Code" type="text" class="password__change__input" />
                                <button class="password__change__btn">Generate New 2FA QR</button>
                                <div class="qr__wrapper">
                                    <img src={qrcode} alt="" class="qr__img" />
                                </div>
                            </form>
                        </div>
                        <div class="login__settings login__settings_notification">
                            <h3 class="login__settings__title">Notification Settings</h3>
                            <form action="#" class="password__change__block">
                                <h4 class="password__change__block__title">Alerts will be send</h4>
                                <div class="alerts__input__box">
                                    <div class="alerts__input__wrapper disable">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="20" height="16" src={email} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="" value="ciso@company.com" disabled type="text"
                                            class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper active">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="20" height="16" src={email} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="" value="liron@company.com" disabled type="text"
                                            class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="20" height="16" src={email} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="Email" type="text" class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper active">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="32" height="32" src={slack} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="" value="liron@company.com" disabled type="text"
                                            class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper links">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="32" height="32" src={telegram} alt=""
                                                class="alerts__input__icon" />
                                            <img width="32" height="32" src={slack} alt=""
                                                class="alerts__input__icon" />
                                            <img width="32" height="33" src={whatsap} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="" value="liron@company.com" disabled type="text"
                                            class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper active one">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="21" height="23" src={sms} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="" value="+972 54 1234 567" disabled type="text"
                                            class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={check} width="12" height="12" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                    <div class="alerts__input__wrapper">
                                        <div class="alerts__input__add">
                                            <img src={plus} width="14" height="14" alt="plus"
                                                class="alerts__input__add__icon" />
                                        </div>
                                        <div class="alerts__input__icon__wrapper">
                                            <img width="20" height="16" src={email} alt=""
                                                class="alerts__input__icon" />
                                        </div>
                                        <input placeholder="Phone Call (CSOC)" type="text" class="alerts__input" />
                                        <div class="alerts__input__check">
                                            <img src={phone} width="18" height="19" alt="" class="alerts__input__check__icon" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>

        </>)
}