import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";

import PatternGreen from "../assets/pattern_green.svg";

const EventsPage = ({ data, location }) => {
  const sections = [
    {
      title: "Sponsor The Boiler",
      subheading: "Purdue's Student-run Startup Accelerator",
      paragraphs: [
        <>
          We are always looking for support for our startup accelerator program,
          The Boiler. If you are interested in sponsoring you can look at our
          packet below. We are open to negotiation so feel free to contact us if
          you have any questions
        </>,
        <>
          For more information, refer to{" "}
          <a
            href={data.boilerPacket.publicURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            The Boiler Sponsorship Packet
          </a>
          .
        </>,
        <>
          Feel free to contact us any time at{" "}
          <a href="mailto:contact@anvilstartups.com">
            contact@anvilstartups.com
          </a>
          .
        </>
      ],
      imageFluid: data.boilerImage.childImageSharp.fluid,
      alt: "Cryptoleague giving their final pitch at Demo Day 2018"
    },
    {
      title: "Sponsor The Anvil",
      paragraphs: [
        <>
          We're always looking for support to keep building our community
          through events, outreach, and our coworking space. If you'd like to
          sponsor The Anvil, you can refer to our{" "}
          <a
            href={data.anvilPacket.publicURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Anvil Sponsorship Packet
          </a>
          .
        </>
      ]
    }
  ];

  return (
    <Layout location={location}>
      <TitleSection Pattern={PatternGreen} title="Sponsor" theme="green" />
      {sections.map((section, index) => (
        <TextSection
          Pattern={PatternGreen}
          {...section}
          index={index}
          key={index}
        />
      ))}
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query {
    boilerPacket: file(relativePath: { eq: "pdf/Boiler Sponsorship.pdf" }) {
      publicURL
    }
    anvilPacket: file(relativePath: { eq: "pdf/Sponsorship Packet 2018.pdf" }) {
      publicURL
    }
    boilerImage: file(relativePath: { eq: "img/boiler2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
