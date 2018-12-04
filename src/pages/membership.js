import React from "react";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";
import Perks from "../components/perks";
import Pricing from "../components/pricing";

import PatternYellow from "../assets/pattern_yellow.svg";

const sections = [
  {
    title: "The Perks",
    subheading:
      "A full-featured coworking space. We'll handle the small stuff, so you can keep innovating."
  },
  {
    title: "Pricing",
    subheading: "We'd Love for you to join our community:"
  }
];

const MembershipPage = ({ location }) => (
  <Layout
    location={location}
    pageTitle="Coworking Membership in West Lafayette, IN"
  >
    <TitleSection Pattern={PatternYellow} title="Membership" theme="gold" />

    <TextSection Pattern={PatternYellow} {...sections[0]} index={0} />
    <Perks />
    <TextSection Pattern={PatternYellow} {...sections[1]} index={1} />

    <Pricing />
  </Layout>
);

export default MembershipPage;
