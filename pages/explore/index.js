import axios from "axios";
import Layout from "../../components/layout/PublicLayout/PublicLayout";
import { useRouter } from "next/router";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";
import FeaturedResorts from "../../components/resorts/FeaturedResorts/FeaturedResorts";

import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import Resorts from "./Resorts/Resorts";

// TODO:
// get location from url path
// if location
// render recommended in area
// render all resorts in area
// else render all resorts

const Explore = ({ resorts }) => {
  console.log("resorts:", resorts);
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Layout title="Explore">
      <Container>
        <SearchBar />
        <FeaturedResorts
          resorts={resorts}
          heading={[<h1 className="text-center">Recommended in area</h1>]}
        />
        <Resorts
          resorts={resorts}
          heading={[<h2 className="text-center">More results</h2>]}
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
