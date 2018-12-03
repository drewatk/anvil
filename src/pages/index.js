import React from "react";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Squares from "../components/squares";

const IndexPage = ({ location }) => {
  return (
    <Layout
      location={location}
      pageTitle="Purdue's Student Entrepreneurship Hub"
    >
      <Jumbotron />
      <Squares />
    </Layout>
  );
};
export default IndexPage;
