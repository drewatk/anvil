import React from "react";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";

import PatternYellow from "../assets/pattern_yellow.svg";

const section = {
  title: "Pricing",
  subheading: "We'd Love for you to join our community"
};

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <TitleSection
      Pattern={PatternYellow}
      title="About the Anvil"
      theme="gold"
    />
    {/* TODO: perks section
    <TextSection Pattern={PatternYellow} {...section} index={0} /> */}
  </Layout>
);

export default AboutPage;
