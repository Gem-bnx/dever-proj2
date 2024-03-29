import React from "react";
import "./style.scss";
function Service() {
  return (
    <section id="service-block">
      <div className="container">
        <div className="service__intro">
          <h2 className="service-intro__heading">Test Yönetimiyle Neler Sağlıyoruz?</h2>
          <p className="service-intro__desc">IoT Destekli Çözümler</p>
        </div>
        <div className="services">
          <div className="service">Yazılım Kalitesini Arttırıyoruz</div>
          <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785473/project2/CaretCircleDoubleRight_oay4bd.svg"></img>
          <div className="service">Olası Hataları Önceden Belirliyoruz</div>
          <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785473/project2/CaretCircleDoubleRight_oay4bd.svg"></img>
          <div className="service">Oluşabilecek Riskleri Önlüyoruz</div>
          <img src="https://res.cloudinary.com/diowgvamj/image/upload/v1677785473/project2/CaretCircleDoubleRight_oay4bd.svg"></img>
          <div className="service">Zaman ve Maliyetten Tasarruf Sağlıyoruz</div>
        </div>
      </div>
    </section>
  );
}

export default Service;
