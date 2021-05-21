import axios from "axios";

import Layout from "../../components/layout/PublicLayout/PublicLayout";
import {
  BASE_URL,
  RESORTS_ENDPOINT,
  REVIEWS_ENDPOINT,
} from "../../constants/api";
import ResortDetail from "./ResortDetail/ResortDetail";

const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;

const Resort = ({ resort, reviews }) => {
  // const { slug } = resort;
  console.log(resort);

  return (
    <Layout title={resort.title}>
      <ResortDetail resort={resort} reviews={reviews} />
    </Layout>
  );
};

export default Resort;

export const getStaticPaths = async () => {
  let resorts = [];

  try {
    const res = await axios.get(resortsUrl);
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
  const resortUrl = `${resortsUrl}?slug=${params.slug}`;
  const reviewsUrl = `${BASE_URL}${REVIEWS_ENDPOINT}`;

  let resort = null;
  let reviews = [];

  try {
    const resortRes = await axios.get(resortUrl);
    const reviewsRes = await axios.get(reviewsUrl);
    resort = resortRes.data[0];
    reviews = reviewsRes.data;
  } catch (err) {
    console.log("resort fetch error: ", err);
  }

  return {
    props: {
      resort,
      reviews,
    },
  };
};
