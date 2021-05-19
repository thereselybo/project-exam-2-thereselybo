import axios from "axios";
import Layout from "../../components/layout/PublicLayout/PublicLayout";
import Image from "next/image";
import ContactForm from "./ContactForm/ContactForm";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { BASE_URL, MESSAGE_TOPICS_ENDPOINT } from "../../constants/api";

// TODO:
// center align form vertically

const Contact = ({ messageTopics }) => {
  return (
    <Layout title="Contact">
      <Row className="d-flex flex-md-row justify-content-between horizontal-layout">
        {/* left side content */}
        <Col md={6}>
          <Container>
            <h1 className="mt-5">Contact</h1>

            <ContactForm messageTopics={messageTopics} />
          </Container>
        </Col>

        {/* right side content */}
        <Col
          md={6}
          className="d-none d-md-flex h-100 position-fixed end-0 top-0"
        >
          <Image
            src="/images/contact.svg"
            alt="Illustration of a laptop in front of tropical scenery"
            layout="fill"
            objectFit="cover"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  let messageTopics = [];

  const url = `${BASE_URL}${MESSAGE_TOPICS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    messageTopics = res.data;
  } catch (err) {
    console.log("fetch error:", err);
  }

  return {
    props: {
      messageTopics,
    },
  };
};
