import axios from "axios";
import Layout from "../../components/layout/publicLayout/PublicLayout";
import { useRouter } from "next/router";
import {
  BASE_URL,
  DESTINATIONS_ENDPOINT,
  RESORTS_ENDPOINT,
} from "../../constants/api";
import FeaturedResorts from "../../components/resorts/featuredResorts/FeaturedResorts";

import { Container } from "react-bootstrap";
import SearchBar from "../../components/explore/SearchBar";
import Resorts from "../../components/explore/Resorts";

const Explore = ({ resorts, destinations }) => {
  let key = Date.now();

  return (
    <Layout title="Explore">
      <Container className="explore-container">
        <SearchBar destinations={destinations} />
        <FeaturedResorts
          resorts={resorts}
          heading={[
            <h1 className="text-center my-4" key={key++}>
              Recommended resorts
            </h1>,
          ]}
        />
        <Resorts
          resorts={resorts}
          heading={[
            <h2 className="text-center mt-5 mb-4" key={key++}>
              More results
            </h2>,
          ]}
        />
      </Container>
    </Layout>
  );
};

export default Explore;

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
