import { Alert, Col } from "react-bootstrap";

const Message = ({ message, variant, className }) => {
  return (
    <Col xs={12}>
      <Alert className={`${className} message py-2 px-3`} variant={variant}>
        {message}
      </Alert>
    </Col>
  );
};

export default Message;
