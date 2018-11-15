import React from "react";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";
import Pricing from "../components/pricing";

import PatternYellow from "../assets/pattern_yellow.svg";

const section = {
  title: "Pricing",
  subheading: "We'd Love for you to join our community"
};

const MembershipPage = ({ location }) => (
  <Layout location={location}>
    <TitleSection Pattern={PatternYellow} title="Membership" theme="gold" />
    {/* TODO: perks section */}
    <TextSection Pattern={PatternYellow} {...section} index={0} />

    <Pricing />
  </Layout>
);

export default MembershipPage;
