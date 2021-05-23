import axios from "axios";

import Layout from "../../components/layout/publicLayout/PublicLayout";
import {
  BASE_URL,
  FACILITIES_ENDPOINT,
  RESORTS_ENDPOINT,
  REVIEWS_ENDPOINT,
} from "../../constants/api";
import ResortDetail from "../../components/resorts/resortDetail/ResortDetail";

const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;

const Resort = ({ resort, reviews, facilities }) => {
  console.log(resort);

  return (
    <Layout title={resort.title}>
      <ResortDetail resort={resort} reviews={reviews} facilities={facilities} />
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
  const facilitiesUrl = `${BASE_URL}${FACILITIES_ENDPOINT}`;

  let resort = null;
  let reviews = [];
  let facilities = [];

  try {
    const resortRes = await axios.get(resortUrl);
    const reviewsRes = await axios.get(reviewsUrl);
    const facilitiesRes = await axios.get(facilitiesUrl);
    resort = resortRes.data[0];
    reviews = reviewsRes.data;
    facilities = facilitiesRes.data;
  } catch (err) {
    console.log("resort fetch error: ", err);
  }

  return {
    props: {
      resort,
      reviews,
      facilities,
    },
  };
};
