import bada from "../../assets/img/bada.png";
import low from "../../assets/img/law.png"
import ham from "../../assets/img/ham.png"
import twi from "../../assets/img/twiter.png"
import insta from "../../assets/img/insta.png"
import you from "../../assets/img/you.png"
import "./main.css";

export const Fakshin = () => {
  return (
    <section className="fakshin">
      <div className="container">
        <div className="fakshin-inner">
          <div className="fakshin-box">
            <div className="faskshin-archana">
              <div className="faskshin-text">
                <h2 className="fakshin-h2">arcarta</h2>
                <p className="fakshin-p">
                  Our Customer Due Diligence platform helps you avoid fines or
                  losing clients due to AML while protecting you from
                  cybercrime.
                </p>
                <p className="fakshin-p">Approved Service Provider</p>
                <a className="fakshin-img" href="#">
                  <img src={bada} alt="" />
                </a>
                <p className="fakshin-p">In Partnership with</p>
                <a className="fakshin-bada" href="#">
                  <img src={low} alt="" />
                </a>
                <p className="fakshin-item-p">
                  Registered with the Information Commissioner's Office (ICO)
                  Registration number: ZA679248
                </p>
              </div>
              <div className="Mark-p">
                <nav className="header-nav3">
                  <ul className="header-list1">
                    <li className="header-item-salom">
                      <a href="#" className="header-item-a">
                        Gitpod
                      </a>
                      <p>Links</p>
                      <p>Home</p>
                      <p>About us</p>
                      <p>Why arcarta</p>
                      <p>Success Stories</p>
                      <p>FAQ's</p>
                      <p>Contact Us</p>
                      <p>Join</p>
                    </li>
                    <li className="header-item-salom">
                      <a href="#" className="header-item-a">
                        Developer
                      </a>
                      <p>Getting started</p>
                      <p>Screencasts</p>
                      <p>Blog</p>
                      <p>Documentation</p>
                      <p>Report a bug</p>
                      <p>Community</p>
                    </li>
                    <li className="header-item-salom">
                      <a href="#" className="header-item-a">
                        Company
                      </a>
                      <p>About</p>
                      <p>Careers</p>
                      <p>Contact</p>
                      <p>Media Kit</p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="fakshin-tugash">
                <div className="fakshin-ham">
                    <ul className="fakshin-list">
                        <li className="fakshin--item-list">
                            <a href="#">
                                <img src={ham} alt="" />
                            </a>
                        </li>
                        <li className="fakshin--item-list">
                            <a href="#">
                                <img src={twi} alt="" />
                            </a>
                        </li>
                        <li className="fakshin--item-list">
                            <a href="#">
                                <img src={insta} alt="" />
                            </a>
                        </li>
                        <li className="fakshin--item-list">
                            <a href="#">
                                <img src={you} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
