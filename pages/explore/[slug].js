import axios from "axios";

import Layout from "../../components/layout/PublicLayout/PublicLayout";
import { BASE_URL, DESTINATIONS_ENDPOINT } from "../../constants/api";

// TODO: 
// either build or discard

const url = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

const Destination = ({ destination }) => {
  const { slug } = destination;

  return <Layout>Some destination and stuff inside it</Layout>;
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

// export const getStaticProps = async () => {
//     let destinations = [];

//     try {
//       const res = await axios.get(url);
//       destinations = res.data;
//     } catch (err) {
//       console.log("destinations fetch error:", err);
//     }

//     return {
//       props: {
//         resorts,
//         destinations,
//       },
//     };
//   };
//   export const getStaticProps = async();

// export const getStaticProps = async ({ params }) => {
//   const destinationUrl = `${url}?slug=${params.slug}`;
//   console.log(destinationUrl);
//   let destination = null;

//   try {
//     const res = await axios.get(url);
//     destination = res.data;
//   } catch (err) {
//     console.log("destination fetch error: ", err);
//   }

//   return {
//     props: {
//       destination,
//     },
//   };
// };
