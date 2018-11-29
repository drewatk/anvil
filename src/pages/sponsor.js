import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";

import PatternGreen from "../assets/pattern_green.svg";

const EventsPage = ({ data, location }) => {
  const section1 = {
    title: "The Boiler",
    subheading: "Lorem ispum blah blah blah",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus."
    ],
    imageFluid: data.imageOne.childImageSharp.fluid
  };
  const section2 = {
    title: "Section 2",
    subheading: "Lorem ispum blah blah blah",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus."
    ]
  };

  const textSections = [section1, section2];
  return (
    <Layout location={location}>
      <TitleSection Pattern={PatternGreen} title="Sponsor" theme="green" />
      {textSections.map((section, index) => (
        <TextSection Pattern={PatternGreen} {...section} index={index} />
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
  }
`;
