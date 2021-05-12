// import Layout from "../../../components/layout/AdminLayout/AdminLayout";

//   return (
//     <Layout title="Edit resort">
//       <h1>Edit resort</h1>
//     </Layout>
//   );
// };

// export default Editresort;

import axios from "axios";
import Layout from "../../../components/layout/AdminLayout/AdminLayout";
import {
  BASE_URL,
  DESTINATIONS_ENDPOINT,
  FACILITIES_ENDPOINT,
  RESORTS_ENDPOINT,
} from "../../../constants/api";
import EditForm from "./EditForm/EditForm";

const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;

const EditResort = ({ resort, destinations, facilities }) => {
  // console.log(resortDetails);
  // console.log(resortDetails.facilities);

  return (
    <Layout title="Edit resort">
      <h1>Edit resort</h1>
      <EditForm
        resort={resort}
        destinations={destinations}
        facilities={facilities}
      />
      {/* {({
        // handleSubmit,
        handleChange,
        // handleBlur,
        // values,
        // touched,
        // isValid,
        // errors
      }) => ( */}

      {/* )} */}
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

// export const getStaticProps = async ({ params }) => {

//   try {
//     const facilitiesRes = await axios.get(facilitiesUrl);
//   } catch (err) {
//     console.log("fetch error:", err);
//   }

//   return {
//     props: {
//       facilities,
//       destinations,
//     },
//   };
// };
