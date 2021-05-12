import { Alert } from "react-bootstrap";

const Message = ({ message, variant, className }) => {
  return (
    <Alert className={className} variant={variant}>
      {message}
    </Alert>
  );
};

export default Message;
