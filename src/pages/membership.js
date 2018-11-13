import React from "react";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";
import Pricing from "../components/pricing";

import styles from "./events.module.scss";

const section = {
  title: "Pricing",
  subheading: "We'd Love for you to join our community"
};

const MembershipPage = () => (
  <Layout>
    <TitleSection title="Membership" theme="gold" />
    <div className={styles.sections}>
      {/* <TextSection {...section1} />  */}
      <TextSection {...section} />
    </div>
    <Pricing />
  </Layout>
);

export default MembershipPage;
