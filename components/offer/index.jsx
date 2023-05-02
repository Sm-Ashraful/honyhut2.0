import React from "react";

import styles from "./style.module.css";

const OfferPercent = ({ percentage }) => {
  return <div className={`${styles.offer_container}`}>-{percentage}%</div>;
};

export default OfferPercent;
