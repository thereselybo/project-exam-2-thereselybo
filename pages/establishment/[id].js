import axios from "axios";

import Layout from "../../components/layout/PublicLayout/PublicLayout";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";

const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

const Establishment = ({ establishment }) => {
  const { slug } = establishment;

  return <Layout>Some establishment and stuff inside it</Layout>;
};

export default Establishment;

export const getStaticPaths = async () => {
  let establishments = [];

  try {
    const res = await axios.get(url);
    establishments = res.data;

    const paths = establishments.map((establishment) => ({
      params: { slug: establishment.slug },
    }));

    return { paths, fallback: false };
  } catch (err) {
    console.log("establishments fetch error: ", error);
  }
};

export const getStaticProps = async ({ params }) => {
  const establishmentUrl = `${url}?slug=${params.slug}`;
  console.log(establishmentUrl);
  let establishment = null;

  try {
    const res = await axios.get(url);
    establishment = res.data;
  } catch (err) {
    console.log("establishment fetch error: ", err);
  }

  return {
    props: {
      establishment,
    },
  };
};
