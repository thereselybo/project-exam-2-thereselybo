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
import { getResortDetails } from "../../../utils/getResortDetails";
import { Form, Row, Col, Button, FormCheck } from "react-bootstrap";

const resortsUrl = `${BASE_URL}${RESORTS_ENDPOINT}`;

const EditResort = ({ resort, destinations, facilities }) => {
  const resortDetails = getResortDetails(resort);
  // console.log(resortDetails);
  // console.log(resortDetails.facilities);

  return (
    <Layout title="Edit resort">
      <h1>Edit resort</h1>
      {/* {({
        // handleSubmit,
        handleChange,
        // handleBlur,
        // values,
        // touched,
        // isValid,
        // errors
      }) => ( */}
      <Form>
        <Row className="my-3">
          <Form.Group as={Col} xs={12} md={6}>
            <Form.Label>Resort name</Form.Label>
            <Form.Control
              defaultValue={resortDetails.title ? resortDetails.title : ""}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={6}>
            <Form.Label>Location</Form.Label>
            <Form.Control
              as="select"
              defaultValue={
                resortDetails.destination ? resortDetails.destination : ""
              }
              // {resortDetails.title ? (`defaultValue=${resortDetails.title}`) : ""}
            >
              <option disabled value="">
                Choose location
              </option>
              {destinations.map((destination, i) => {
                return <option key={i}>{destination.title}</option>;
              })}
              {/* <option>...</option> */}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12}>
            <Form.Label>Introduction</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={
                resortDetails.introduction ? resortDetails.introduction : ""
              }
            />
          </Form.Group>

          <Form.Group as={Col} xs={12}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={
                resortDetails.description ? resortDetails.description : ""
              }
            />
          </Form.Group>

          <Form.Group as={Col} xs={12}>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={resortDetails.image ? resortDetails.image : ""}
            />
          </Form.Group>

          <Form.Group as={Col} xs={12}>
            <Form.Label>Facilities</Form.Label>
            <Row>
              {facilities.map((facility, i) => {
                // let checked = resortDetails.facilities.find(
                //   (checkedFacility) => {
                //     console.log(checkedFacility.title === facility.title);
                //     return checkedFacility.title === facility.title;
                //   }
                // );
                // let checked = resortDetails.facilities.forEach(
                //   (checkedFacility) => {
                //     console.log(
                //       "checkedFacility.title:",
                //       checkedFacility.title,
                //       "facility.title:",
                //       facility.title,
                //       checkedFacility.title === facility.title
                //     );
                //     return checkedFacility.title === facility.title;
                //   }
                // );
                let checked = resortDetails.facilities.some(
                  (checkedFacility) => {
                    // console.log(
                    //   "checkedFacility.title:",
                    //   checkedFacility.title,
                    //   "facility.title:",
                    //   facility.title,
                    //   checkedFacility.title === facility.title
                    // );
                    return checkedFacility.title === facility.title;
                  }
                );
                console.log(checked);
                return (
                  <Col key={i} xs={12} md={6} lg={4}>
                    <Form.Check
                      type="checkbox"
                      label={facility.title}
                      defaultChecked={checked}
                      // checked={checked}
                      // defaultValue={checked}
                      onChange={(e) => {
                        // e.target.checked = !checked;
                        // e.target.value = !checked;

                        // console.log(
                        //   "e.target.checked on click:",
                        //   e.target.checked
                        // );
                        // console.log("checked before:", checked);
                        e.target.checked = !checked;
                        checked = !checked;
                        // console.log(
                        //   "e.target.checked after:",
                        //   e.target.checked
                        // );
                        // console.log("checked after:", checked);
                      }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Form.Group>

          <Form.Group as={Col} xs={6}>
            <Form.Label>Price per night</Form.Label>
            <Form.Control
              defaultValue={resortDetails.price ? resortDetails.price : ""}
            />
          </Form.Group>

          <Form.Group as={Col} xs={6}>
            <Form.Label>Featured</Form.Label>
            {/* <Form.Check
              type="switch"
              id="custom-switch"
              className="form-check-input"
              // label="Check this switch"
            /> */}
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            {/* <FormCheck
              id="switchEnabled"
              type="switch"
              checked={true}
              onChange={() => {
                console.log("checking switch");
              }}
              label="Switch"
            /> */}
            {/* <Form.Switch id="featured" className="custom-control-input" /> */}
          </Form.Group>

          {/* <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div> */}
        </Row>

        <Col className="d-flex justify-content-center">
          <Button
            variant="primary"
            size="lg"
            className="mx-auto mt-3"
            type="submit"
          >
            Update resort
          </Button>
        </Col>
      </Form>
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
