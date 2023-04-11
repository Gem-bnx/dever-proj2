import React from "react";
import "./style.scss"
function Company() {
  return (
    <section id="company-block">
      <div className="container">
        <div className="company__intro">
          <h2 className="company-intro__heading">Referanslarımız</h2>
          <p className="company-intro__desc">
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </p>
        </div>
      </div>
      <div className="companies__logo">
          <div className="col company__logo--col1">
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/9_z8f0va.svg"></img>
            </div>
          </div>
          <div className="col company__logo--col2">
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/8_bxqnlh.svg"></img>
            </div>
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/7_jsowk5.svg"></img>
            </div>
          </div>
          <div className="col company__logo--col3">
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/6_zc9bki.svg"></img>
            </div>
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/5_gc2p9q.svg"></img>
            </div>
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444705/project2/logo/4_ergk62.svg"></img>
            </div>
          </div>
          <div className="col company__logo--col4">
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444707/project2/logo/3_r0rjsq.svg"></img>
            </div>
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444706/project2/logo/2_droyjn.svg"></img>
            </div>
          </div>
          <div className="col company__logo--col5">
            <div className="logo">
            <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1678444706/project2/logo/1_fhc8vo.svg"></img>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Company;
