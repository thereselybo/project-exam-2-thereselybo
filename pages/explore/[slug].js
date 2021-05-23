import axios from "axios";
import { BASE_URL, DESTINATIONS_ENDPOINT } from "../../constants/api";

import Layout from "../../components/layout/publicLayout/PublicLayout";
import SearchBar from "../../components/explore/SearchBar";
import FeaturedResorts from "../../components/resorts/featuredResorts/FeaturedResorts";
import Resorts from "../../components/explore/Resorts";
import { Container } from "react-bootstrap";

const url = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

const Destination = ({ destination, destinations }) => {
  const resorts = destination.resorts;
  
  let key = Date.now();

  return (
    <Layout title={`Explore ${destination.title}`}>
      <Container className="explore-container">
        <SearchBar destinations={destinations} />
        <FeaturedResorts
          resorts={resorts}
          heading={[
            <h1 className="text-center my-4" key={key++}>
              Recommended in {destination.title}
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

export default Destination;

export const getStaticPaths = async () => {
  let destinations = [];

  try {
    const res = await axios.get(url);
    destinations = res.data;

    const paths = destinations.map((destination) => ({
      params: { slug: destination.slug },
    }));

    return { paths, fallback: false };
  } catch (err) {
    console.log("destinations fetch error: ", error);
  }
};

export const getStaticProps = async ({ params }) => {
  let destination = null;
  let destinations = [];

  const destinationUrl = `${url}?slug=${params.slug}`;
  const destinationsUrl = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

  try {
    const destinationRes = await axios.get(destinationUrl);
    const destinationsRes = await axios.get(destinationsUrl);

    destination = destinationRes.data[0];
    destinations = destinationsRes.data;
  } catch (err) {
    console.log("destination fetch error: ", err);
  }

  return {
    props: {
      destination,
      destinations,
    },
  };
};
