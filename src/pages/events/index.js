import React from "react";
import { graphql, Link } from "gatsby";
import { Button } from "reactstrap";

import Layout from "../../components/layout";
import TitleSection from "../../components/title-section";
import TextSection from "../../components/text-section";

import PatternBlue from "../../assets/pattern_blue.svg";

const EventsPage = ({ data, location }) => {
  const sections = [
    {
      title: "Startup Career Fair",
      subheading: "Building a Pipeline of Purdue Talent to the Midwest",
      paragraphs: [
        "If you are a Purdue student who is looking for an internship or a full time job, we invite you to come out to the first annual Purdue Startup Career Fair!",
        <>
          Startup Career Fair is Purdue&rsquo;s first career fair that focuses
          solely on introducing students to some of the fastest growing startups
          in the region. We are bringing out 25+ companies in a wide variety of
          industries with more than a 100+ opportunities available for students.
          The career fair will be taking place{" "}
          <b>Thursday February 28th, 2019 from 3pm to 7pm</b> at The Anvil.
        </>,
        "The career fair is open to students of all majors and years. If you’re looking to make an outsized impact early on in your career, this is the career fair for you!",
        <>
          <a href="http://startupfair.anvilstartups.com/">
            <Button>Register Now!</Button>
          </a>
        </>
      ]
    },
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
