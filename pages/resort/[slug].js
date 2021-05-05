import axios from "axios";

import Layout from "../../components/layout/PublicLayout/PublicLayout";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";
import ResortCard from "./ResortCard/ResortCard";

const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

const Resort = ({ resort }) => {
  // const { slug } = resort;
  console.log(resort);

  return (
    <Layout>
      <ResortCard resort={resort} />
    </Layout>
  );
};

export default Resort;

export const getStaticPaths = async () => {
  let resorts = [];

  try {
    const res = await axios.get(url);
    resorts = res.data;

    const paths = resorts.map((resort) => ({
      params: { slug: resort.slug },
    }));

    return { paths, fallback: false };
  } catch (err) {
    console.log("resorts fetch error: ", error);
  }
};

export const getStaticProps = async ({ params }) => {
  const resortUrl = `${url}?slug=${params.slug}`;
  console.log(resortUrl);
  let resort = null;

  try {
    const res = await axios.get(resortUrl);
    resort = res.data[0];
  } catch (err) {
    console.log("resort fetch error: ", err);
  }

  return {
    props: {
      resort,
    },
  };
};
