import "./card.css";
import CardOne from "../../assets/img/card-first.png";
import Cardtwo from "../../assets/img/card-first.png";
import CardThree from "../../assets/img/card-first.png";
import CardFour from "../../assets/img/card-first.png";

export const Card = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="card-inner">
          <div className="card-box">
            <article className="card-article">
              <img
                src={CardOne}
                alt="card-img"
                className="card-img"
                width={220}
                height={220}
              />
              <h4 className="card-title">For Art Dealers</h4>
              <p className="catd-text">Galleries and independent art dealers</p>
              <button className="card-btn">Learn More</button>
            </article>
            <article className="card-article">
              <img
                src={Cardtwo}
                alt="card-img"
                className="card-img"
                width={220}
                height={220}
              />
              <h4 className="card-title">For Advisors</h4>
              <p className="catd-text">Advisors, agents and consultants</p>
              <button className="card-btn">Learn More</button>
            </article>
            <article className="card-article">
              <img
                src={CardThree}
                alt="card-img"
                className="card-img"
                width={220}
                height={220}
              />
              <h4 className="card-title">For Auctioneers</h4>
              <p className="catd-text">Online and offline auctioneers</p>
              <button className="card-btn">Learn More</button>
            </article>
            <article className="card-article">
              <img
                src={CardFour}
                alt="card-img"
                className="card-img"
                width={220}
                height={220}
              />
              <h4 className="card-title">For Buyers & Collectors</h4>
              <p className="catd-text">
                Receiving Invoices, making card payments and sending your ID and
                address documents
              </p>
              <button className="card-btn">Learn More</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
