import {useEffect} from 'react';
import { useRouter } from 'next/router';
import { gsap } from "gsap";

import Header from '../components/header';
import indexAnimation from '../gsap/index';
import Logo2 from '../public/img/logo-2.svg';

const Home = () => {
  useEffect(() => {
    indexAnimation(gsap, document, useRouter);
  }, []);
  const router = useRouter();

  const heroOne = () => {
    const overlay3 = document.querySelector(".overlay3");
    overlay3.classList.add("overlay3__animate");
    setTimeout(() => {
      router.push('/testimony');
      overlay3.classList.remove("overlay3__animate");
    }, 700);
  }

  const heroTwo = () => {
    const overlay4 = document.querySelector(".overlay4");
    overlay4.classList.add("overlay4__animate");
    setTimeout(() => {
      router.push('/testimony');
      overlay4.classList.remove("overlay4__animate");
    }, 700);
  }

  const heroThree = () => {
    const overlay5 = document.querySelector(".overlay5");
    overlay5.classList.add("overlay5__animate");
    setTimeout(() => {
      router.push('/testimony');
      overlay5.classList.remove("overlay5__animate");
    }, 700);
  }

  return (
    <div>
      <Header title="The Sound Therapist" />

      <div className="overlay"></div>
      <div className="overlay2"></div>

      <div className="overlay3"></div>
      <div className="overlay4"></div>
      <div className="overlay5"></div>

      <div className="hero">
        <div className="hero__layout hero--one" onClick={heroOne}>
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
        <div className="hero__layout hero--two" onClick={heroTwo}>
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
        <div className="hero__layout hero--three" onClick={heroThree}>
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

export default Home;