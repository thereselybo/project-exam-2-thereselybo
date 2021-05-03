import Layout from "../components/layout/PublicLayout/PublicLayout";
import Image from "next/image";
import SuperEllipse from "react-superellipse";
import axios from "axios";
import {
  BASE_URL,
  RESORTS_ENDPOINT,
  DESTINATIONS_ENDPOINT,
} from "../constants/api";
import Header from "./home/Header";
import FeaturedResorts from "../components/resorts/FeaturedResorts/FeaturedResorts";

import { Container, Col, Form, Row, Button } from "react-bootstrap";

import styles from "./home/index.module.scss";
import TravelGuides from "../components/destinations/TravelGuides/TravelGuides";

const Home = ({ resorts, destinations }) => {
  console.log(destinations);
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
        <TravelGuides
          destinations={destinations}
          heading={[<h2 className="text-center">Travel guides</h2>]}
        />
      </Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let resorts = [];
  let destinations = [];

  const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;
  const destinationsUrl = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

  try {
    const resortsRes = await axios.get(resortsUrl);
    const destinationsRes = await axios.get(destinationsUrl);
    resorts = resortsRes.data;
    destinations = destinationsRes.data;
  } catch (err) {
    console.log("resort fetch error:", err);
  }

  return {
    props: {
      resorts,
      destinations,
    },
  };
};
