import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";

import PatternBlue from "../assets/pattern_blue.svg";

const EventsPage = ({ data, location }) => {
  const section1 = {
    title: "The Boiler",
    subheading: "Purdue's Student Run Startup Accellerator",
    paragraphs: [
      "The longest running and most successful initiative of The Anvil, The Boiler is back for our fifth year enabling student startups in the Purdue community. The Boiler is a pre-seed accelerator with a mission of taking early stage startups from Purdue students and giving them the resources they need to succeed and generate revenue."
    ],
    imageFluid: data.imageOne.childImageSharp.fluid
  };
  const section2 = {
    title: "Crossing State Street",
    subheading: "Purdue's First Social Entrepreneurship Competition",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus."
    ],
    imageFluid: data.imageTwo.childImageSharp.fluid
  };

  const textSections = [section1, section2];
  return (
    <Layout location={location}>
      <TitleSection Pattern={PatternBlue} title="Events" theme="blue" />
      {textSections.map((section, index) => (
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
