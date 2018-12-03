import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import TitleSection from "../../components/title-section";
import TextSection from "../../components/text-section";

const BoilerPage = ({ data, location }) => {
  const sections = [
    {
      title: "The Boiler",
      subheading: "",
      paragraphs: [],
      imageFluid: null,
      alt: ""
    }
  ];

  return (
    <Layout location={location} pageTitle="The Boiler">
      {/* <TitleSection Pattern={PatternBlue} title="Events" theme="blue" />
      {textSections.map((section, index) => (
        <TextSection
          Pattern={PatternBlue}
          {...section}
          index={index}
          key={index}
        />
      ))} */}
    </Layout>
  );
};

export default BoilerPage;

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
