import './buscar.css';
import QR from './icons/qrcode.png'
import GooglePlay from './icons/googleplay.png'

import { Link } from 'react-router-dom';

function Buscar() {

    return (

        <div>
            {/* Header */}
            <div class="Layout_headerWrapper__OxZzz">
                <header class="ComicWalkerHeader_header__iogOB ComicWalkerHeader_headerThin__4JOlC">
                    <a class="site"><Link to="/">MangáRoll</Link></a>
                    <ul class="ComicWalkerHeader_linkGroup__BCbtp">
                        <li class="ComicWalkerHeader_linkTextItem__FYEUk">
                            <a class="ComicWalkerHeader_linkText__fNClA"><Link to="/signup">Sign up</Link></a>
                        </li>
                        <li class="ComicWalkerHeader_linkTextItem__FYEUk">
                            <span class="ComicWalkerHeader_linkText__fNClA"><Link to="/login">Log in</Link></span>
                        </li>
                        <li>
                            <a class="ComicWalkerHeader_linkButton__8f00S">
                                <img src={require('./icons/buscar.svg').default} />
                            </a>
                        </li>
                        <li class="ComicWalkerHeader_linkButton__8f00S ComicWalkerHeader_dropdownTrigger__zgosa">
                            <img src={require('./icons/menu.svg').default} />
                        </li>
                    </ul>
                </header>
            </div>

            {/* Body */}
            <div className="Layout_mainWrapper__CoBx_">
                <div className="SearchPage_searchPage__CcmzC">
                    <div className="Container_container__UvfDl Container_gutter__9VgX7 Container_medium__SzLIj">
                        <div className="BubblePageTitleHeading_wrapper__JUPYu">
                            <h1 className="BubblePageTitleHeading_bubble__VZrpp">Buscar Mangá</h1>
                        </div>
                    </div>

                    <div className="Container_container__UvfDl Container_gutter__9VgX7 Container_medium__SzLIj">
                        <div role="search">
                            <form className="SearchArea_searchArea__pEFLV">
                                <div className="SearchKeywordInput_searchKeywordInput___gwUn">
                                    <label
                                        className="SearchKeywordInput_gridItemAlignCenter__FTERy SearchKeywordInput_resetCursor__zZ9tf"
                                        htmlFor="search-input"
                                    >
                                        <img src={require('./icons/buscar.svg').default} />

                                    </label>
                                    <input
                                        className="SearchKeywordInput_textField__wcC5r"
                                        style={{ fontSize: '16px' }}
                                        id="search-input"
                                        placeholder="Digite o título/autor"
                                        required
                                    />
                                    <div className="SearchKeywordInput_gridItemAlignCenter__FTERy">
                                        <button
                                            type="button"
                                            style={{ visibility: 'hidden' }}
                                            className="SearchKeywordInput_closeButton__2DiH2"
                                        >
                                            <span role="img"></span>
                                        </button>
                                    </div>
                                </div>
                                <button className="Button_root__9nG82 TextButton_root__ZT9nJ TextButton_sm__PKaw6" type="submit">
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="SearchEntranceView_searchEntranceView___oqVl">
                        <div className="Container_container__UvfDl Container_gutter__9VgX7">
                            <div className="SearchEntranceView_categoryIndex__YQx5e">
                                <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                    Recém-lançados
                                </a>
                                <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                    Classificação
                                </a>
                                <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                    Popular
                                </a>
                                <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                    One Shot
                                </a>
                            </div>
                        </div>

                        <section className="SearchByGenreSection_root__4ht5f">
                            <div className="Container_container__UvfDl Container_gutter__9VgX7">
                                <div className="SearchByGenreSection_contents__xJ52L">
                                    <div className="SimpleModerateHeading_wrapper___Arlx">
                                        <h2 className="SimpleModerateHeading_title__l5i0E">Procurar por Gênero</h2>
                                        <div className="SimpleModerateHeading_linkWrapper__1kyPN">
                                            <a className="NavTextLink_link__iGuhd">
                                                <span className="NavTextLink_text__cqf0R">Ver mais</span>
                                                <a class="NavTextLink_icon__TvSTt">
                                                <img src={require('./icons/vermais.svg').default} />
                                                </a>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="Tiles_root__pRxBE" style={{ '--col-sp': 2, '--col-pc': 4 }}>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Ação
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Aventura
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Comédia
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Drama
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Escola
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Esportes
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Fantasia
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Ficção Científica
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Magia
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Música
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Militar
                                        </a>
                                        <a className="Button_root__9nG81 Button_fullWidth__IdHDH Button_white__sPHVF TextButton_root__ZT9nJ TextButton_md__V8uv3">
                                            Romance
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="Container_container__UvfDl Container_gutter__9VgX7"></div>
                        </section>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div class="Layout_footerWrapper__ctyRT">
                <section class="FooterAppPromotion_pcRoot__VzYj1">
                    <div className="FooterAppPromotion_pcContent__Juyx1">
                        <div className="FooterAppPromotion_pcDownload__P_Zh0">
                            <a>
                                <img src={require('./icons/appstore.svg').default} class="FooterAppPromotion_pcBadge__0fFRY" />
                            </a>
                            <a>
                                <img src={GooglePlay} class="FooterAppPromotion_pcBadge__0fFRY" />
                            </a>
                            <img src={QR} class="FooterAppPromotion_pcBadge__0fFRY" />

                        </div>
                    </div>
                </section>

                <footer className="ComicWalkerFooter_footer__zULWM">
                    <div className="Container_container__UvfDl Container_gutter__9VgX7">
                        <div className="ComicWalkerFooter_content__KZOuE">
                            <ul className="ComicWalkerFooter_linkList__Obx6M">
                                <li><Link to="/">Home</Link></li>
                                <li><a>Termos de Uso</a></li>
                                <li><a>Política de Privacidade</a></li>
                            </ul>
                            <div className="ComicWalkerFooter_ABJMarkWrapper__XAABa"></div>
                            <div className="ComicWalkerFooter_copyright__1eoYK">
                                <a>
                                    © ComicNippo
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
};

export default Buscar