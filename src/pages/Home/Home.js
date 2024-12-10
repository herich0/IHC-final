import './home.css'; 
import QR from './icons/qrcode.png'
import GooglePlay from './icons/googleplay.png'

import { Link } from 'react-router-dom';

function Home() {

    const spanStyle = {
        position: "absolute",
        border: "0",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    };

    const bannerStyle = {
        position: "relative",
        width: "100%",
        paddingBottom: "25%"
    };

    return (
        <div>
            <header class="ComicWalkerHeader_header__iogOB Layout_headerWrapper__OxZzz">
                <a class="site"><Link to="/">MangáRoll</Link></a>
                <ul class="ComicWalkerHeader_linkGroup__BCbtp">
                    <li class="ComicWalkerHeader_linkTextItem__FYEUk">
                        <a class="ComicWalkerHeader_linkText__fNClA"><Link to="/signup">Sign up</Link></a>
                    </li>
                    <li class="ComicWalkerHeader_linkTextItem__FYEUk">
                        <span class="ComicWalkerHeader_linkText__fNClA"><Link to="/login">Log in</Link></span>
                    </li>
                    <li>
                        <Link to="/buscar"><a class="ComicWalkerHeader_linkButton__8f00S">
                            <img src={require('./icons/buscar.svg').default} />
                            <span class="ComicWalkerHeader_linkLabel__QqNQu">Buscar</span>
                        </a></Link>
                    </li>
                    <li class="ComicWalkerHeader_linkButton__8f00S ComicWalkerHeader_dropdownTrigger__zgosa">
                        <img src={require('./icons/menu.svg').default} />
                        <span class="ComicWalkerHeader_linkLabel__QqNQu">Menu</span>
                    </li>
                </ul>
            </header>

            <section class="GlobalMediaHomePage_noBackground__5E8q3 DailyPickupWorksSection_root__5wb9L">
                <div class="Container_container__UvfDl">
                    <nav class="DayOfWeekSelectNavigation_navigation__JlqUK DailyPickupWorksSection_navigation__AEsLx" aria-label="曜日ごとの連載">
                        <ul class="DayOfWeekSelectNavigation_list__tZrCZ">
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">SEG<span style={spanStyle}></span>
                                </a>
                            </li>
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P" aria-current="page" >TER<span style={spanStyle}></span>
                                </a>
                            </li>
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">QUA<span style={spanStyle}></span>
                                </a>
                            </li>                       
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">QUI<span style={spanStyle}>"></span>
                                </a>
                            </li>                 
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">SEX<span style={spanStyle}></span>
                                </a>
                            </li>
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">SÁB<span style={spanStyle}></span>
                                </a>
                            </li>                     
                            <li>
                                <a class="DayOfWeekSelectNavigation_link__Xuk7P">DOM<span style={spanStyle}></span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="DailyPickupWorksSection_banner__6eeQw">
                        <div style={bannerStyle}></div>
                    </div>
                </div>

                <div class="Container_container__UvfDl Container_gutter__9VgX7">
                    <div class="DailyPickupWorksSection_worksList__7DC34">
                        <ul class="Tiles_root__pRxBE WorkThumbnailList_workList__1VhsF WorkThumbnailList_spHighlightFirst__AWAwa" style={{
                            '--col-sp': 2,
                            '--col-pc': 4,
                            '--gap-sp-row': '24px',
                            '--gap-sp-column': '12px',
                            '--gap-pc-row': '24px',
                            '--gap-pc-column': '20px',
                        }}>
                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <Link to="/manga"><a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%',                   paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="WorkThumbnail_root__kuLcr">
                                    <a className="WorkThumbnail_link__LWlLk">
                                        <div className="WorkThumbnail_thumbnailWrapper__tXZs_">
                                            <div data-radix-aspect-ratio-wrapper="" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                                            </div>
                                        </div>
                                        <div className="WorkThumbnail_textWrapper___fS_V">
                                            <span className="WorkThumbnail_title__EmZ6E" lang="ja">
                                                Título
                                            </span>
                                            <span lang="ja" className="WorkThumbnail_supplementalInfo__fq4Xm">
                                                Subtítulo
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>


            <section className="GlobalMediaHomePage_backgroundGrey__ZGqMH">
                <div className="Container_container__UvfDl Container_gutter__9VgX7">
                    <div className="RankingSection_rankingSection__FBXdv">
                        <div className="SimpleHeading_wrapper__eWzS_">
                            <div className="SimpleHeading_iconWrapper__rU0v6">
                                <img src={require('./icons/ranking.svg').default} />
                            </div>
                            <h2 className="SimpleHeading_title__3xouY">Classificação de hoje</h2>
                            <div className="SimpleHeading_linkWrapper___ZVf4">
                                <a className="NavTextLink_link__iGuhd">
                                    <span className="NavTextLink_text__cqf0R">Ver mais</span>
                                    <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="NavTextLink_icon__TvSTt"
                                    >
                                        <path
                                            d="M-6.16331e-08 10.59L4.94467 6L-4.62904e-07 1.41L1.52227 -6.65404e-08L8 6L1.52227 12L-6.16331e-08 10.59Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div dir="ltr" data-orientation="horizontal">
                            <div className="TabsWithDropdown_tabListWrapper___nXH_">
                                <div
                                    role="tablist"
                                    aria-orientation="horizontal"
                                    className="Tabs_tabsList__nBIVB"
                                    style={{ outline: 'none', '--tab-color': '#000' }}
                                >
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="true"
                                        aria-controls="radix-:r32:-content-all"
                                        className="Tabs_tabsTrigger__pykV_"
                                    >
                                        Geral
                                    </button>
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="radix-:r32:-content-fantasy"
                                        className="Tabs_tabsTrigger__pykV_"
                                    >
                                        Fantasia
                                    </button>
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                        aria-controls="radix-:r32:-content-romance"
                                        className="Tabs_tabsTrigger__pykV_"
                                    >
                                        Romance
                                    </button>
                                </div>
  
                            </div>
                            <div
                                data-state="active"
                                role="tabpanel"
                                aria-labelledby="radix-:r32:-trigger-all"
                                id="radix-:r32:-content-all"
                            >
                                <section className="RankingSection_subSection__H_l2a">
                                    <ul
                                        className="Tiles_root__pRxBE WorkThumbnailList_workList__1VhsF WorkThumbnailList_spHighlightFirst__AWAwa"
                                        style={{
                                            '--col-sp': 2,
                                            '--col-pc': 4,
                                            '--gap-sp-row': '24px',
                                            '--gap-sp-column': '12px',
                                            '--gap-pc-row': '24px',
                                            '--gap-pc-column': '20px',
                                        }}
                                    >
                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}                           data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <img src={require('./icons/top1.svg').default} />
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <img src={require('./icons/top2.svg').default} />
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>
   
                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <img src={require('./icons/top3.svg').default} />
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <div className="IconRank_iconRank__NK5vf IconRank_exceptTop3__hGy_I">
                                                                <span>4
                                                                    <span style={{ position: 'absolute', border: 0, width: '1px', height:                                   '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect                                      (0, 0, 0, 0)', whiteSpace: 'nowrap', wordWrap: 'normal' }}>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <div className="IconRank_iconRank__NK5vf">
                                                                <div className="IconRank_iconRank__NK5vf IconRank_exceptTop3__hGy_I">
                                                                    <span>5
                                                                        <span style={{ position: 'absolute', border: 0, width: '1px',                                           height: '1px', padding: 0, margin: '-1px', overflow: 'hidden',                                         clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', wordWrap:                                              'normal' }}>
                                                                        </span>
                                                                    </span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <div className="IconRank_iconRank__NK5vf IconRank_exceptTop3__hGy_I">
                                                                <span>6
                                                                    <span style={{ position: 'absolute', border: 0, width: '1px', height:                                   '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect                                      (0, 0, 0, 0)', whiteSpace: 'nowrap', wordWrap: 'normal' }}>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li><li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <div className="IconRank_iconRank__NK5vf IconRank_exceptTop3__hGy_I">
                                                                <span>7
                                                                    <span style={{ position: 'absolute', border: 0, width: '1px', height:                                   '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect                                      (0, 0, 0, 0)', whiteSpace: 'nowrap', wordWrap: 'normal' }}>
                                                                    </span>
                                                                </span>
                                                            </div>

                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="RankingWorkThumbnail_root__ApOZw" data-layout="fixed">
                                                <div className="RankingWorkThumbnail_latest__6JhhE"></div>

                                                    <div className="RankingWorkThumbnail_thumbnailWrapper__sorqM" data-layout="fixed">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} data-radix-aspect-ratio-wrapper="">
                                                        </div>
                                                    </div>

                                                    <span className="RankingWorkThumbnail_titleWrapper__tTPXF">
                                                        <div className="IconRank_iconRank__NK5vf">
                                                            <div className="IconRank_iconRank__NK5vf IconRank_exceptTop3__hGy_I">
                                                                <span>8
                                                                    <span style={{ position: 'absolute', border: 0, width: '1px', height:                                   '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect                                      (0, 0, 0, 0)', whiteSpace: 'nowrap', wordWrap: 'normal' }}>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="RankingWorkThumbnail_title__hk8tg">Título</span>
                                                    </span>

                                            </div>
                                        </li>

                                    </ul>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="Layout_footerWrapper__ctyRT">
                <section class="FooterAppPromotion_pcRoot__VzYj1">
                    <div className="FooterAppPromotion_pcContent__Juyx1">
                        <div className="FooterAppPromotion_pcDownload__P_Zh0">
                            <a>
                                <img src={require('./icons/appstore.svg').default}class="FooterAppPromotion_pcBadge__0fFRY" />
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
    );
}

export default Home