import Image from "next/image";
import SuperEllipse from "react-superellipse";
import axios from "axios";
import {
  BASE_URL,
  RESORTS_ENDPOINT,
  DESTINATIONS_ENDPOINT,
} from "../constants/api";

import Layout from "../components/layout/publicLayout/PublicLayout";
import Header from "../components/home/Header";
import FeaturedResorts from "../components/resorts/featuredResorts/FeaturedResorts";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import TravelGuides from "../components/destinations/TravelGuides/TravelGuides";
import PopularDestinations from "../components/destinations/PopularDestinations";
import Footer from "../components/layout/publicLayout/Footer";

const Home = ({ resorts, destinations }) => {
  console.log(destinations);
  let key = Date.now();
  return (
    <Layout title="Home">
      <Header destinations={destinations} />
      <Container className="home mb-5">
        <FeaturedResorts
          resorts={resorts}
          heading={[
            <h2 className="text-center mt-5 mb-4" key={key++}>
              <span className="d-none d-md-inline">Not sure? </span> Get
              inspired
            </h2>,
          ]}
        />
        <PopularDestinations
          destinations={destinations}
          heading={[
            <h2 className="text-center mt-5 mb-4" key={key++}>
              Popular destinations
            </h2>,
          ]}
        />
        <TravelGuides
          destinations={destinations}
          heading={[
            <h2 className="text-center mt-5 mb-4" key={key++}>
              Travel guides
            </h2>,
          ]}
        />
        <Footer />
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
