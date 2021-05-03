import Layout from "../components/layout/PublicLayout/PublicLayout";
import Image from "next/image";
import SuperEllipse from "react-superellipse";
import axios from "axios";
import { BASE_URL, RESORTS_ENDPOINT } from "../constants/api";
import Header from "./home/Header";
import FeaturedResorts from "../components/resorts/FeaturedResorts/FeaturedResorts";

import { Container, Col, Form, Row, Button } from "react-bootstrap";

import styles from "./home/index.module.scss";

const Home = ({ resorts }) => {
  // const featuredHeading = `${[
  //   <h2>
  //     <span className="d-none d-md-inline">Not sure? </span> Get inspired
  //   </h2>,
  // ]}`;
  return (
    <Layout title="Home">
      <Header />
      <Container>
        <FeaturedResorts
          resorts={resorts}
          heading={[
            <h2 className="text-center">
              <span className="d-none d-md-inline">Not sure? </span> Get
              inspired
            </h2>,
          ]}
        />
        {/* <FeaturedResorts resorts={resorts} heading={featuredHeading} /> */}
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let resorts = [];
  const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    resorts = res.data;
  } catch (err) {
    console.log("resort fetch error:", err);
  }

  return {
    props: {
      resorts,
    },
  };
};
