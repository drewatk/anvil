import React from "react";
import { graphql, Link } from "gatsby";
import { Button } from "reactstrap";

import Layout from "../components/layout";
import TitleSection from "../components/title-section";
import TextSection from "../components/text-section";
// import Ventures from "../components/ventures";

import PatternYellow from "../assets/pattern_yellow.svg";

const AboutPage = ({ data, location }) => {
  const sections = [
    {
      title: "Who are we?",
      subheading: "Purdue's Student Entrepreneurship Hub",
      paragraphs: [
        "The Anvil is a student run, 501(c)(3) non-profit organization whose mission is to inspire and empower the entrepreneurs of Purdue University and the Greater Lafayette, Indiana, community by providing co-working for founders and startups as well as mentorship, programming and resources.",
        "As an organization, we provide a space for students interested in creating their own companies to meet other like minded peers and exchange ideas with one another. Throughout the academic year, we host experts with experience in startups, and provide events and resources for the student-run ventures getting their start in West Lafayette."
      ],
      imageFluid: data.imageOne.childImageSharp.fluid
    },
    {
      title: "Where are we?",
      subheading: 'The "Chapel of Entrepreneurship"',
      paragraphs: [
        <>
          One year after we founded, we took over the old University Church at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/VqYT5xv5fuJ2"
          >
            320 North Street
          </a>
          , right across from Purdue Memorial Union. The upstairs consists of a
          2,000 square foot coworking space, which is open to our members to
          work. It also features our main stage which we use to host{" "}
          <Link to="events">our events</Link>. We also host few tenants, such as
          a makerspace for Purdue student organizations downstairs, and office
          space for local startups.
        </>
      ],
      imageFluid: data.imageTwo.childImageSharp.fluid
    },
    {
      title: "Interested in our mission?",
      subheading: "Help us or Join Our Team",
      paragraphs: [
        <>
          We are a 501(c)(3) nonprofit organization, funded through donations
          through our community. If you're interested in sponsoring us so we can
          continue our work please see our
          <Link to="/sponsor">sponsorshop page here</Link>.
        </>,
        <>
          If you'd like to help by getting involved in our executive board, fill
          out the following form, and one of our team members will get in touch.
        </>,
        <>
          <a href="http://bit.ly/AnvilExecTeam">
            <Button>Join Our Team</Button>
          </a>
        </>,
        <>
          Feel free to contact us any time at{" "}
          <a href="mailto:contact@anvilstartups.com">
            contact@anvilstartups.com
          </a>
          .
        </>
      ]
    }
  ];
  return (
    <Layout location={location} pageTitle="About">
      <TitleSection
        Pattern={PatternYellow}
        title="About the Anvil"
        theme="gold"
      />
      {sections.map((section, index) => (
        <TextSection
          Pattern={PatternYellow}
          {...section}
          index={index}
          key={index}
        />
      ))}
      {/* <Ventures Pattern={PatternYellow} index={3} /> */}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "img/demo_day.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "img/anvil_space.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
