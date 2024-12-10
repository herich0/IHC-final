import './manga.css';
import QR from './icons/qrcode.png'
import GooglePlay from './icons/googleplay.png'

import { Link } from 'react-router-dom';

function Manga() {

    const hiddenStyle = {
        position: 'absolute',
        border: '0',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
    };

    return (

        <div >

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
                                <Link to="/buscar"><img src={require('./icons/buscar.svg').default} /></Link>
                            </a>
                        </li>
                        <li class="ComicWalkerHeader_linkButton__8f00S ComicWalkerHeader_dropdownTrigger__zgosa">
                            <img src={require('./icons/menu.svg').default} />
                        </li>
                    </ul>
                </header>
            </div>

            {/* Body */}
            <div class="_blankPageContent_c4gkk_34"></div>

            <div className="_root_jrxn1_7">
                <div className="_lower_jrxn1_23">
                    <div className="_left_jrxn1_33">
                        <div className="_root_4qxo0_7">
                            <button type="button" className="_button_1ymz2_7">
                                <span className="_icon_1ymz2_19">
                                    <img
                                        src={require('./icons/telacheia.svg').default}
                                        style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(180deg)' }}
                                        alt="icon"
                                    />
                                </span>
                                Tela Cheia
                            </button>
                        </div>
                    </div>
                    <div className="_center_jrxn1_37">
                        <button type="button" className="_button_1ymz2_7">
                            1 / 12
                        </button>
                    </div>
                    <div className="_right_jrxn1_41">
                        <button type="button" className="_button_1ymz2_7">
                            <span className="_icon_1ymz2_19">
                                <img
                                    src={require('./icons/vertical.svg').default}
                                    style={{ filter: 'invert(1) sepia(1) saturate(5) hue-rotate(180deg)' }}
                                    alt="icon"
                                />
                            </span>
                            Ver na Vertical
                        </button>
                    </div>
                </div>
            </div>

            <div className="ContentsDetailPage_episodeTitleArea__rJP2C">
                <div className="Container_container__UvfDl Container_gutter__9VgX7">
                    <div className="EpisodeTitleArea_episodeInfo__A7Wk0">
                        <div className="EpisodeTitleArea_episodeMeta__Cdl4S">
                            <div className="EpisodeTitleArea_meta__9sShs">
                                <span className="EpisodeTitleArea_updateDate__FDgs_">10/12/2024</span>
                            </div>
                            <div className="EpisodeTitleArea_contents__k8ncM">
                                <h1 className="EpisodeTitleArea_title__dOV6R" lang="pt-br">
                                    【Capítulo 1】Título
                                </h1>
                                <div>
                                    <button
                                        className="Button_root__9nG81 TextButton_root__ZT9nJ TextButton_sm__PKaw6 FollowButton_followButton__MD7M9"
                                        style={{ color: '#fff', justifyContent: 'center', backgroundColor: '#575757' }}
                                        data-following="false"
                                    >
                                        <span>Lido</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="EpisodeTitleArea_shareWrapper__NxgYp">
                            <div className="AuthorList_creditsList__0kDIJ">
                                <a className="AuthorList_author__i8F_k">
                                    Autor / Desenhista
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="ContentsDetailPage_hrThin__zW4i9" />

            <div class="Container_container__UvfDl Container_gutter__9VgX7">
                <div class="ContentsDetailPage_twoColumnOnPcArea__652J9">
                    <div class="ContentsDetailPage_workDetailAndComicInfo__1w7QW">
                        <section>
                            <div data-state="closed" class="WorkDetailsSection_root__Nhj9m">
                                <div class="WorkDetailsSection_thumbnail__Gswld">
                                    <div
                                        className="aspect-ratio-wrapper"
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            paddingBottom: '56.25%',
                                        }}
                                        data-radix-aspect-ratio-wrapper
                                    ></div>
                                </div>
                                <div class="WorkDetailsSection_pcDetailArea__pJL2b">
                                    <div class="WorkDetailsSection_pcDetailContent__u2NRs">
                                        <p class="WorkDetailsSection_description__jfAmX">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                                        </p>
                                        <div class="WorkDetailsSection_tagContainer__BChj7">
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                            <a class="TinyTagButton_tinyTagButton__j995V TinyTagButton_sm__g1ktp">
                                                <span style={hiddenStyle}>tag </span>
                                                <img src={require('./icons/tag.svg').default} />
                                                    <span class="TinyTagButton_text__Tq4q1">Tag</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="ContentsDetailPage_episodeList__kOQID">
                        <div dir="ltr" data-orientation="horizontal">
                            <div
                                role="tablist"
                                aria-orientation="horizontal"
                                style={{ outline: 'none', '--tab-color': '#000' }}
                                className="Tabs_tabsList__nBIVB EpisodeListSection_tabList__LFBwR"
                                tabIndex="0"
                                data-orientation="horizontal"
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                    aria-controls="radix-:R3976:-content-episodes"
                                    data-state="active"
                                    id="radix-:R3976:-trigger-episodes"
                                    className="Tabs_tabsTrigger__pykV_"
                                    tabIndex="-1"
                                    data-orientation="horizontal"
                                    data-radix-collection-item=""
                                >
                                    Últimos Capítulos
                                </button>
                            </div>
                            <div
                                data-state="active"
                                data-orientation="horizontal"
                                role="tabpanel"
                                aria-labelledby="radix-:R3976:-trigger-episodes"
                                id="radix-:R3976:-content-episodes"
                                tabIndex="0"
                                className="EpisodeListSection_tabContent__cf6Ii"
                            >
                                <div data-state="closed">
                                    <div className="EpisodesTabContents_root__VrJZ1">
                                        <div className="EpisodesTabContents_meta__69gzW"></div>
                                        <ul className="EpisodesTabContents_episodeList__cIDQz" id=":Rn976:">
                                            <li>
                                                <a
                                                    className="EpisodeThumbnail_episodeThumbnail__0lFSg"
                                                    style={{ '--is-reading-bg': 'rgba(87,87,87,0.1)' }} >
                                                    <div className="EpisodeThumbnail_infoWrapper__XWQHA">
                                                        <div className="EpisodeThumbnail_titleWrapper__BA_Xg">
                                                            <div className="EpisodeThumbnail_title__G1eWj">
                                                                Capitulo 2
                                                            </div>
                                                            <div className="EpisodeThumbnail_updateWrapper__v4OYA">
                                                                <span className="EpisodeThumbnail_updateDate__OYfbI">
                                                                    10/12/2024
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li></li>
                                            <li>
                                                <a
                                                    className="EpisodeThumbnail_episodeThumbnail__0lFSg"
                                                    style={{ '--is-reading-bg': 'rgba(87,87,87,0.1)' }}>
                                                    <div className="EpisodeThumbnail_infoWrapper__XWQHA">
                                                        <div className="EpisodeThumbnail_titleWrapper__BA_Xg">
                                                            <div className="EpisodeThumbnail_title__G1eWj">
                                                                Capitulo 1
                                                            </div>
                                                            <div className="EpisodeThumbnail_updateWrapper__v4OYA">
                                                                <span className="EpisodeThumbnail_updateDate__OYfbI">
                                                                    03/12/2024
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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

        </div >
    );
}

export default Manga