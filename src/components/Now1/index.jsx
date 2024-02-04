import odam from "../../assets/img/odam.png"
import "./main.css"

export const Now = () => {
  return (
    <section className="now">
      <div className="container">
<div className="now-inner">
    <div className="nox-box">
      <div className="now-innner-nox">
      <div className="now-card">
             <img className="now-odam" src={odam} alt=""  width={346} height={325}/>
            <div className="now-item-card">
<h2 className="now-text">Art world insight.</h2>
<p className="now-p">Receive our newsletter direct to your inbox to follow updates to legislation and the EU art-market's response.</p>
<input className="naw-input" type="text" placeholder="Your email" />
            </div>
        </div>
      </div>
    </div>
</div>
      </div>
    </section>
  );
};
