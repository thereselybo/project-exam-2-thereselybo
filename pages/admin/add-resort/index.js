import axios from "axios";
import Layout from "../../../components/layout/adminLayout/AdminLayout";
import {
  BASE_URL,
  DESTINATIONS_ENDPOINT,
  FACILITIES_ENDPOINT,
} from "../../../constants/api";

import AddResortForm from "../../../components/admin/AddResortForm";

const AddResort = ({ facilities, destinations }) => {
  // console.log("destinations", destinations);
  return (
    <Layout title="Add resort">
      <h1 className="mt-5 mb-4">Add resort</h1>
      <AddResortForm facilities={facilities} destinations={destinations} />
    </Layout>
  );
};

export default AddResort;

export const getStaticProps = async () => {
  let facilities = [];
  let destinations = [];

  const facilitiesUrl = `${BASE_URL}${FACILITIES_ENDPOINT}`;
  const destinationsUrl = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

  try {
    const facilitiesRes = await axios.get(facilitiesUrl);
    const destinationsRes = await axios.get(destinationsUrl);
    facilities = facilitiesRes.data;
    destinations = destinationsRes.data;
  } catch (err) {
    console.log("fetch error:", err);
  }

  return {
    props: {
      facilities,
      destinations,
    },
  };
};
