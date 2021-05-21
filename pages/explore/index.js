import axios from "axios";
import Layout from "../../components/layout/PublicLayout/PublicLayout";
import { useRouter } from "next/router";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";
import FeaturedResorts from "../../components/resorts/FeaturedResorts/FeaturedResorts";

import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import Resorts from "./Resorts/Resorts";

const Explore = ({ resorts }) => {
  // console.log("resorts:", resorts);
  // const router = useRouter();
  // console.log(router.pathname);
  let key = Date.now();

  return (
    <Layout title="Explore">
      <Container className="explore-container">
        <SearchBar />
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
