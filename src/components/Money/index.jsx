import "./money.css";
import Right from "../../assets/img/right.png";
import Laptop from "../../assets/img/laptop.svg";

export const Money = () => {
  return (
    <section className="money">
      <div className="container">
        <div className="money-inner">
          <div className="moeny-left">
            <p className="money-p">01</p>
            <img
              src={Laptop}
              alt="img"
              className="money-img"
              width={64}
              height={37}
            />
            <h4 className="money-title">Compliance Quiz</h4>
            <hr />
            <button className="money-left-btn">
              Begin{" "}
              <img
                src={Right}
                alt="icon"
                className="money-left-img"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="money-right">
            <button className="money-right-btn">New</button>
            <h3 className="money-right-title">
              Does Anti-money Laundering affect you?
            </h3>
            <p className="money-right-text">
              A short, interactive quiz to check if your art business is
              affected by 5AMLD regulation.
            </p>
            <button className="money-right-btn-bottom">Take the Quiz</button>
          </div>
        </div>
      </div>
    </section>
  );
};
