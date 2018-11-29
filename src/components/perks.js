import React from "react";

import icon1 from "../assets/icons8-last_24_hours.png";
import icon2 from "../assets/icons8-wi_fi_connected.png";
import icon3 from "../assets/icons8-conference.png";
import icon4 from "../assets/icons8-room.png";

import styles from "./perks.module.scss";

const Perks = () => (
  <div className={styles.perks}>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col   ">
          <img src={icon1} alt="24/7 Access" />
          <h5 className="text-uppercase">24/7 Access</h5>
        </div>
        <div className="col">
          <img src={icon2} alt="High Speed Internet" />
          <h5 className="text-uppercase">High Speed Internet</h5>
        </div>
        <div className="col">
          <img src={icon3} alt="Networking Events" />
          <h5 className="text-uppercase">Networking Events</h5>
        </div>
        <div className="col">
          <img src={icon4} alt="Work Space" />
          <h5 className="text-uppercase">Work Space</h5>
        </div>
      </div>
    </div>
  </div>
);

export default Perks;
