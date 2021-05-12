import axios from "axios";

import Layout from "../../../components/layout/AdminLayout/AdminLayout";
import { BASE_URL, MESSAGES_ENDPOINT } from "../../../constants/api";

import MessageDisplay from "./MessageDisplay/MessageDisplay";

// const Bookings = ({ bookings }) => {
const Messages = ({ messages }) => {
  return (
    <Layout title="Messages">
      <h1>Messages</h1>
      <MessageDisplay messages={messages} />
    </Layout>
  );
};

export default Messages;

export const getStaticProps = async () => {
  let messages = [];

  const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    messages = res.data;
  } catch (err) {
    console.log("messages fetch error:", err);
  }

  return {
    props: {
      messages,
    },
  };
};

// const something = () => {
//   const bookingDetails = getBookingDetails(booking);
//   return (
//     <Row key={i} className="justify-content-between align-items-center">
//       <Col xs={2} md={1} className="pe-0">
//         {/* <Col> */}
//         <Image
//           // className="position-relative"
//           src={bookingDetails.image}
//           alt={bookingDetails.imageAlt}
//           // layout="fill"
//           width="80"
//           height="80"
//         />
//       </Col>
//       <Col xs={7} className="d-flex d-md-none flex-column">
//         <Col>{bookingDetails.resort}</Col>
//         <Col>
//           {bookingDetails.check_in}-{bookingDetails.check_out}
//         </Col>
//       </Col>
//       <Col className="d-none d-md-block" md={3}>
//         {bookingDetails.resort}
//       </Col>
//       <Col className="d-none d-md-block" md={2}>
//         {bookingDetails.guest}
//       </Col>
//       <Col className="d-none d-md-block" md={2}>
//         {bookingDetails.check_in}
//       </Col>
//       <Col className="d-none d-md-block" md={2}>
//         {bookingDetails.check_out}
//       </Col>
//       <Col className="d-flex align-items-end">
//         <Button
//           className="ms-auto"
//           variant="primary"
//           onClick={() => {
//             handleShow(bookingDetails);
//           }}
//         >
//           Details
//         </Button>
//       </Col>
//     </Row>
//   );
// };
