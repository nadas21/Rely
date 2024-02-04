import "./header.css";
import Logo from "../../assets/img/logo.png";
import Hamburger from "../../assets/img/menu.png";
import Close from "../../assets/img/close.png";
import { useState } from "react";

export const Header = () => {

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen((item) => !item)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo-link">
            <img
              src={Logo}
              alt=""
              className="header-logo"
              width={140}
              height={28}
            />
          </a>

          <div className={open ? "header-box" : "header-box-extra"}>
            <img
              src={Close}
              alt="hamburger"
              className="close-btn"
              width={25}
              height={25}
              onClick={handleModal}
            />
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    What is arcarta?
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Solutions
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Resources
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Contact
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Login
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
            <button className="header-btn">Get Started</button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <img
            src={Hamburger}
            alt="hamburger"
            className="hamburger"
            width={25}
            height={25}
            onClick={handleModal}
          />
        </div>
      </div>
    </header>
  );
};
