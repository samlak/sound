import Head from 'next/head';
import Logo from '../public/img/logo.svg';
import Instagram from '../public/img/instagram.svg';
import Logo2 from '../public/img/logo-2.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Sound Therapist</title>
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

      <div className="overlay"></div>
      <div className="overlay2"></div>

      <div className="navigation">
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <div className="first">
              <li className="navigation__item navigation__item_1">
                <a href="#" className="navigation__link"> What is sound therapy?</a>
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

      <div className="hero">
      <div className="hero__layout hero--one">
        <div className="hero__container">
          <h4 className="hero__heading hero__heading-1">
            Meditative and relaxing, <br />it will lower your stress levels
          </h4>
          <p className="hero__para hero__para-1">
            A holistic treatment that combines pure sounds, harmonics, and
            different frequencies to take you into a deep state of calm and
            relaxation.
          </p>
          <div className="hero__footer">
            <img
              className="hero__footer__img hero__footer__img-1"
              src={Logo2}
              alt=""
            />
            <p className="hero__footer__text hero__footer__text-1">
              WHAT IS SOUND THERAPY?
            </p>
          </div>
        </div>
      </div>
      <div className="hero__layout hero--two">
        <h4 className="hero__heading hero__heading-2">
          Vibroacoustic massages and group <br />
          soundscapes are also available
        </h4>
        <p className="hero__para">
          Treatments include crystal singing bowls, Himalayan singing bowls or
          drums.
        </p>
        <div className="hero__footer">
          <img className="hero__footer__img" src={Logo2} alt="" />
          <p className="hero__footer__text">WHAT DO YOU USE?</p>
        </div>
      </div>
      <div className="hero__layout hero--three">
        <h4 className="hero__heading">
          Sound therapy activates your <br />
          rest and digest response
        </h4>
        <p className="hero__para">
          It can reduce anxiety, aid relaxation and improve sleep quality to
          boost overall health and wellbeing.
        </p>
        <div className="hero__footer">
          <img className="hero__footer__img" src={Logo2} alt="" />
          <p className="hero__footer__text">HOW WILL IT HELP?</p>
        </div>
      </div>
    </div>

    </div>
  )
}
