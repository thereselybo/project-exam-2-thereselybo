import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-wrapper d-flex align-items-center w-100 h-100">
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        className="mx-auto"
      ></Spinner>
    </div>
  );
};

export default LoadingSpinner;
