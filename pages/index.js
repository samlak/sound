import Header from '../components/header';
import Logo2 from '../public/img/logo-2.svg';

export default function Home() {
  return (
    <div>
      <Header title="The Sound Therapist" />

      <div className="overlay"></div>
      <div className="overlay2"></div>

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
