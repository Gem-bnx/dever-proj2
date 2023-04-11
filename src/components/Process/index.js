import React from "react";
import Stages from "../Stages";
import "./style.scss"
function Process() {
  return (
    <section id="process-block">
      <div className="container">
      <div className="process__intro">
        <h3 className="process-intro__heading">Kalite ve Süreç Yönetimi</h3>
        <p className="process-intro__desc">
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>
      <Stages></Stages>
    </div>
    </section>
  );
}

export default Process;
