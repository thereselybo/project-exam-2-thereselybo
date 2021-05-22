import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schema/contactSchema";
import { BASE_URL, MESSAGES_ENDPOINT } from "../../constants/api";

import Message from "../misc/Message";
import FormError from "..//misc/FormError";
import { updateMessage } from "../../utils/updateMessage";

import { Form, Row, Col, Button } from "react-bootstrap";

const ContactForm = ({ messageTopics }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError(null);
    // console.log("data", data);
    const updatedMessage = updateMessage(data, messageTopics);
    // console.log(updatedMessage);

    try {
      console.log(updatedMessage);
      const res = await axios.post(url, updatedMessage);
      if (res.status === 200) {
        // console.log(res);
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitError(err.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="my-3">
        {submitError && <FormError>{submitError}</FormError>}
        {submitted && (
          <Message
            className="my-2 p-2"
            message="Thank you for your message"
            variant="success"
          />
        )}

        <Form.Group as={Col} xs={6} className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            placeholder="Enter your first name"
            {...register("first_name")}
            disabled={submitting}
          />
          {errors.first_name && (
            <Message
              className="my-2 p-2"
              message={errors.first_name.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={6} className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Enter your last name"
            {...register("last_name")}
            disabled={submitting}
          />
          {errors.last_name && (
            <Message
              className="my-2 p-2"
              message={errors.last_name.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            disabled={submitting}
          />

          {errors.email && (
            <Message
              className="my-2 p-2"
              message={errors.email.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Topic</Form.Label>
          <Form.Control
            as="select"
            defaultValue=""
            name="message_topic"
            {...register("message_topic")}
            disabled={submitting}
          >
            <option disabled value="">
              Choose topic
            </option>
            {messageTopics.map((topic, i) => {
              return <option key={i}>{topic.title}</option>;
            })}
          </Form.Control>
          {errors.message_topic && (
            <Message
              className="my-2 p-2"
              message={errors.message_topic.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Enter your message"
            {...register("message")}
            disabled={submitting}
          />
          {errors.message && (
            <Message
              className="my-2 p-2"
              message={errors.message.message}
              variant="danger"
            />
          )}
        </Form.Group>
      </Row>

      <Button
        variant="primary"
        size="lg"
        disabled={submitting}
        type="submit"
        className="px-4"
      >
        {submitting ? "Sending message.." : "Send message"}
      </Button>
    </Form>
  );
};

export default ContactForm;
