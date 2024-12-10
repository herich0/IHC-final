import './login.css'; 
import QR from './icons/qrcode.png'
import GooglePlay from './icons/googleplay.png'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';

function LogIn() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            <div className="LoginForm_root__LlJGG">
                <div className="Container_container__UvfDl Container_gutter__9VgX7 Container_medium__SzLIj">
                    <div className="BubblePageTitleHeading_wrapper__JUPYu">
                        <h1 className="BubblePageTitleHeading_bubble__VZrpp">Log In</h1>
                    </div>
                </div>

                <div className="Container_container__UvfDl Container_gutter__9VgX7 Container_medium__SzLIj">
                    <form noValidate>
                        <fieldset className="FormRoot_fieldset__IXr9n LoginForm_form__3t_gh">
                            <div className="FormControl_formControl__vVVRX">
                                <label htmlFor=":R6km:-label" className="FormLabel_formLabel__u8VyQ">E-mail</label>
                                <input
                                    id=":R6km:-label"
                                    aria-describedby=":R6km:-helper"
                                    aria-errormessage=":R6km:-error"
                                    aria-invalid="false"
                                    className="Input_input__eQdI6"
                                    name="email"
                                    type="email"
                                    placeholder="Digite o e-mail"
                                />
                            </div>

                            <div className="FormControl_formControl__vVVRX">
                                <label htmlFor=":Rakm:-label" className="FormLabel_formLabel__u8VyQ">Senha</label>
                                <input
                                    id=":Rakm:-label"
                                    aria-describedby=":Rakm:-helper"
                                    aria-errormessage=":Rakm:-error"
                                    aria-invalid="false"
                                    className="Input_input__eQdI6"
                                    name="password"
                                    type="password"
                                    placeholder="Digite a senha"
                                />
                            </div>

                            <p className="LoginForm_rescueParagraph__gBVLf">
                                <a className="AnchorText_anchorText__f116j">Esqueceu a senha?</a>
                            </p>

                            <div className="Fallible_root__nK4B1">
                                <button onClick={handleClick} className="Button_root__9nG82 SpinnableTextButton_root__2Y_m7 SpinnableTextButton_md__MeCUa" type="submit">
                                    <span>Log In</span>
                                </button>
                                </div>

                            <p className="LoginForm_registerParagraph__BRpG1">
                                <a className="AnchorText_anchorText__f116j LoginForm_registerLink___jmov"><Link to="/signup">Criar conta</Link></a>
                            </p>
                        </fieldset>
                    </form>
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
    );

}

export default LogIn