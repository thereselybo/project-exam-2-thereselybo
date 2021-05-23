import axios from "axios";
import Layout from "../../../components/layout/adminLayout/AdminLayout";
import {
  BASE_URL,
  DESTINATIONS_ENDPOINT,
  FACILITIES_ENDPOINT,
  RESORTS_ENDPOINT,
} from "../../../constants/api";
import EditForm from "../../../components/admin/EditForm";

const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;

const EditResort = ({ resort, destinations, facilities }) => {

  return (
    <Layout title="Edit resort">
      <h1 className="mt-5 mb-4">Edit resort</h1>
      <EditForm
        resort={resort}
        destinations={destinations}
        facilities={facilities}
      />
    </Layout>
  );
};

export default EditResort;

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
  let destinations = [];
  let resort = null;
  let facilities = [];

  const resortUrl = `${resortsUrl}?slug=${params.slug}`;
  const destinationsUrl = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;
  const facilitiesUrl = `${BASE_URL}${FACILITIES_ENDPOINT}`;

  try {
    const resortRes = await axios.get(resortUrl);
    const destinationsRes = await axios.get(destinationsUrl);
    const facilitiesRes = await axios.get(facilitiesUrl);
    resort = resortRes.data[0];
    destinations = destinationsRes.data;
    facilities = facilitiesRes.data;
  } catch (err) {
    console.log("resort fetch error: ", err);
  }

  return {
    props: {
      resort,
      destinations,
      facilities,
    },
  };
};
