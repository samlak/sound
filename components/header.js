import {useEffect} from 'react';
import { gsap } from "gsap";
import Head from 'next/head';
import Link from 'next/link';

import headerAnimation from '../gsap/header';
import Logo from '../public/img/logo.svg';
import Instagram from '../public/img/instagram.svg';

export default ({title}) => {
  useEffect(() => {
    headerAnimation(gsap, document);
  }, []);
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//db.onlinewebfonts.com/c/6cec834e2e8f2e4206567ed75e1281d4?family=Brandon+Grotesque+Bold"
          rel="stylesheet"
          type="text/css"
        /> 
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
              <Link href={{ pathname: '/testimony' }}><a className="navigation__link"> What is sound therapy?</a></Link>
              </li>
            </div>
            <div className="second">
              <li className="navigation__item navigation__item_2">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> How does it work?</a></Link>
              </li>
            </div>
            <div className="third">
              <li className="navigation__item navigation__item_3">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> Who is The Sound Therapist?</a></Link>
              </li>
            </div>

            <div className="fourth">
              <li className="navigation__item navigation__item_4">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> How I can help</a></Link>
              </li>
            </div>

            <div className="fifth">
              <li className="navigation__item navigation__item_5">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> Get in touch</a></Link>
              </li>
            </div>

            <div className="sixth">
              <li className="navigation__item navigation__item_6">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> What people say</a></Link>
              </li>
            </div>

            <div className="seventh">
              <li className="navigation__item navigation__item_7">
                <Link href={{ pathname: '/' }}><a className="navigation__link"> Blog </a></Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>

    </div>
  )
}