import * as React from 'react';

// css
import './MainHeader.scss';
import logoImg from 'asset/logo_crimsoned.svg';
import logoText from 'asset/logo_text.svg';

// i18n
import { useTranslation } from "react-i18next";

function MainHeader() {
    const { t } = useTranslation();

    return (
        <div className='menu'>
            <div className='inner'>
                <button className='logoBtn'>
                    <img className='logoImg' src={logoImg} alt='logo' />
                    <img className='logoText' src={logoText} alt='logo' />
                </button>
                <nav className='gnb no-drag'>
                    <ul className='gnbList'>
                        {/* LED 스포트 라이트 */}
                        <ul className='menuList'>
                            {t('MENU_TITLE_01')}
                            <div className='spotInner inner01'>
                                <li>LED SPOT LIGHT (12-15w)</li>
                                <li>LED SPOT LIGHT (21-25w)</li>
                                <li>LED SPOT LIGHT (30-40w)</li>
                                <li>LED SPOT LIGHT (50w이상)</li>
                            </div>
                        </ul>
                        {/* LED 다운 라이트 */}
                        <ul className='menuList'>
                            {t('MENU_TITLE_02')}
                            <div className='spotInner inner02'>
                                <li>Hole Size (50ø 이하)</li>
                                <li>Hole Size (55~65ø)</li>
                                <li>Hole Size (70~80ø)</li>
                                <li>Hole Size (80~90ø)</li>
                                <li>Hole Size (90~100ø)</li>
                                <li>Hole Size (105~125ø)</li>
                                <li>Hole Size (130ø 이상)</li>
                            </div>
                        </ul>
                        {/* 할로겐 다운 라이트 */}
                        <ul className='menuList'>
                            {t('MENU_TITLE_03')}
                        </ul>
                        {/* Product */}
                        <ul className='menuList'>
                            {t('MENU_TITLE_04')}
                            <div className='spotInner inner02'>
                                <li>사각 MULTI DOWN LIGHT</li>
                                <li>사각 LED DOWN LIGHT</li>
                                <li>방습용 LED DOWN LIGHT</li>
                            </div>
                        </ul>
                        {/* HOT SALE */}
                        <ul className='menuList hotSale'>
                            {t('MENU_TITLE_05')}
                        </ul>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader;