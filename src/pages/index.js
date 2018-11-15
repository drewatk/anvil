import React from "react";

import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Squares from "../components/squares";

const IndexPage = ({ location }) => {
  console.log(location);
  return (
    <Layout location={location}>
      <Jumbotron />
      <Squares />
    </Layout>
  );
};
export default IndexPage;
