import Tomasso from "../../assets/img/tomasso.png";
import luxemburg from "../../assets/img/luxemburg.png";
import Cristea from "../../assets/img/cristea.png";
import Colonghi from "../../assets/img/colnaghi.png";
import Arrow from "../../assets/img/arrow.png";
import "./hero.css"

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-btn-box">
            <button className="hero-btn-left">New</button>
            <button className="hero-btn-right">The Art Market Report</button>
          </div>
          <h1 className="hero-title">Rely on us</h1>
          <p className="hero-text">
            Our Customer Due Diligence platform helps you avoid fines or losing
            clients due to AML while protecting you from cybercrime.
          </p>
          <button className="hero-btn">Learn More</button>
          <ul className="hero-list">
            <li className="hero-item">
              <img
                src={Colonghi}
                alt="logo"
                className="hero-img"
                width={255}
                height={98}
              />
            </li>
            <li className="hero-item">
              <img
                src={luxemburg}
                alt="logo"
                className="hero-img"
                width={255}
                height={98}
              />
            </li>
            <li className="hero-item">
              <img
                src={Tomasso}
                alt="logo"
                className="hero-img"
                width={255}
                height={98}
              />
            </li>
            <li className="hero-item">
              <img
                src={Cristea}
                alt="logo"
                className="hero-img"
                width={255}
                height={98}
              />
            </li>
          </ul>
          <button className="hero-link-btn">
            What is arcarta?{" "}
            <img
              src={Arrow}
              alt="arrow"
              className="herolink-img"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
