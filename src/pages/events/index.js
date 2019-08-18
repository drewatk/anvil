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
      title: "Startup Career Fair",
      subheading: "Building a Pipeline of Purdue Talent to the Midwest",
      paragraphs: [
        <>
          Startup Career Fair was Purdue&rsquo;s first career fair that focuses
          solely on introducing students to some of the fastest growing startups
          in the region. We brought 25+ companies in a wide variety of
          industries with more than a 100+ opportunities available for students.
          The event was attended by over 300 students across disciplines.
        </>,
        <>
          Stay tuned to{" "}
          <a href="https://www.facebook.com/anvilstartups">our Facebook</a> for
          photos of the event, or get in touch if you&rsquo;d like to be
          involved in next year&rsquo;s fair.
        </>,
        <>
          <a href="http://startupfair.anvilstartups.com/">
            <Button>More Info</Button>
          </a>
        </>
      ]
    },
    {
      title: "Anvil Mentorship Program",
      subheading: "Get involved in spreading entrepreneurship to incoming freshman",
      paragraphs: [
        <>
          The Anvil Mentorship Program is designed to give incoming freshman the resources, connections, and knowledge about Purdue's entrepreneurship scene by giving them a mentor who is already a part of the community. If you are interested in becoming either a mentor or mentee, please sign up below. 
        </>,
        <>
          <a href="https://anvilstartups1.typeform.com/to/c9uC2j">
            <Button>Sign up to be a mentor</Button>
          </a>
          <a href="https://anvilstartups1.typeform.com/to/uuqtGi">
            <Button style={{marginLeft: "15px" }}>Sign up to be a mentee</Button>
          </a>
        </>
      ],
      imageFluid:  data.imageThree.childImageSharp.fluid,
      alt: "Students collaborate in the Crossing State Street competition"
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
    },
    imageThree: file(relativePath: { eq: "img/mentorship.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
