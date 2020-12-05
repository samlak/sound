import Head from 'next/head';
import Link from 'next/link';
import Logo from '../public/img/logo.svg';
import Instagram from '../public/img/instagram.svg';

export default ({title}) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="//db.onlinewebfonts.com/c/6cec834e2e8f2e4206567ed75e1281d4?family=Brandon+Grotesque+Bold"
        rel="stylesheet"
        type="text/css"
      /> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js" defer></script>
      <script src="js/gsap.js" defer></script>
    </Head>

    <div className="header">
      <div className="header__menu">
        <input
          type="checkbox"
          className="header__menu__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="header__menu__button">
          <span className="header__menu__icon">&nbsp;</span>
        </label>

        <img src={Logo} alt="" className="header__menu__logo" />
      </div>

      <div className="header__consultation">
        <a href="#" className="header__consultation__text">BOOK A CONSULTATION</a>
        <a href="#">
          <img
            src={Instagram}
            alt=""
            className="header__consultation__logo"
          />
        </a>
      </div>
    </div>

    <div className="navigation">
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <div className="first">
            <li className="navigation__item navigation__item_1">
              <a className="navigation__link"> What is sound therapy?</a>
            </li>
          </div>
          <div className="second">
            <li className="navigation__item navigation__item_2">
              <a href="#" className="navigation__link"> How does it work?</a>
            </li>
          </div>
          <div className="third">
            <li className="navigation__item navigation__item_3">
              <a href="#" className="navigation__link">
                Who is The Sound Therapist?</a
              >
            </li>
          </div>

          <div className="fourth">
            <li className="navigation__item navigation__item_4">
              <a href="#" className="navigation__link"> How I can help</a>
            </li>
          </div>

          <div className="fifth">
            <li className="navigation__item navigation__item_5">
              <a href="#" className="navigation__link"> Get in touch</a>
            </li>
          </div>

          <div className="sixth">
            <li className="navigation__item navigation__item_6">
              <a href="#" className="navigation__link"> What people say</a>
            </li>
          </div>

          <div className="seventh">
            <li className="navigation__item navigation__item_7">
              <a href="#" className="navigation__link"> Blog </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>

  </div>
)