import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/layout";
import TitleSection from "../../components/title-section";
import TextSection from "../../components/text-section";

import PatternBlue from "../../assets/pattern_blue.svg";

const EventsPage = ({ data, location }) => {
  const sections = [
    {
      title: "The Boiler",
      subheading: "Purdue's Student Run Startup Accellerator",
      paragraphs: [
        "The longest running and most successful initiative of The Anvil, The Boiler is back for our fifth year enabling student startups in the Purdue community. The Boiler is a pre-seed accelerator with a mission of taking early stage startups from Purdue students and giving them the resources they need to succeed and generate revenue.",
        <>
          <Link to="/events/theboiler">
            Find more about this year&rsquo;s program here
          </Link>
        </>
      ],
      imageFluid: data.imageOne.childImageSharp.fluid,
      alt: "Olivia Cane of Unibubbles wins the 4th annual Boiler Accellerator"
    },
    {
      title: "Crossing State Street",
      subheading: "Purdue's First Social Entrepreneurship Competition",
      paragraphs: [
        <>
          In November 2018, The Anvil hosted Purdue’s first social
          entrepreneurship competition. Named Crossing State Street,
          metaphorically bridging our campus, it consisted of multidisciplinary
          teams which created a business plan of a social enterprise. We
          partnered with Care For Friends, a nonprofit based in Chicago, to have
          a common goal, solving the communication between services and the
          homeless population.
        </>
      ],
      imageFluid: data.imageTwo.childImageSharp.fluid,
      alt: "Students collaborate in the Crossing State Street competition"
    }
  ];

  return (
    <Layout location={location} pageTitle="Events">
      <TitleSection Pattern={PatternBlue} title="Events" theme="blue" />
      {sections.map((section, index) => (
        <TextSection
          Pattern={PatternBlue}
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
    imageOne: file(relativePath: { eq: "img/boiler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "img/shobe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
