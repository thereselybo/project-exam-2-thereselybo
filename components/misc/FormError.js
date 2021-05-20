import { Alert, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function FormError({ children }) {
  return (
    <Col xs={12}>
      <Alert className="message py-2 px-3" variant="danger">
        {children}
      </Alert>
    </Col>
  );
}

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};
