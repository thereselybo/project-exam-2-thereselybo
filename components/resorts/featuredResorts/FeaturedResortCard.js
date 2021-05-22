import Link from "next/link";
import SuperEllipse from "react-superellipse";
import { Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const FeaturedResortCard = ({ resortDetails }) => {
  return (
    <Link href={`/resort/${resortDetails.slug}`} passHref>
      <div>
        <SuperEllipse
          // className="m-auto super-ellipse"
          className="m-0 super-ellipse"
          r1={0.03}
          r2={0.4}
          style={
            {
              //   width: "80%",
              //   height: "320px",
              //   background: "hsla(26, 59%, 90%, 0.8)",
              // backgroundImage: `url(${resortDetails.image})`,
            }
          }
          role="button"
        >
          <Card
            className="h-100 position-relative resort-card"
            style={{ backgroundImage: `url(${resortDetails.image})` }}
          >
            <Card.ImgOverlay className="d-flex align-items-end p-0">
              <Card.Body className="p-4">
                <Card.Title className="fw-normal">
                  {resortDetails.title}
                </Card.Title>
                <Card.Text className="fw-light">
                  {resortDetails.destination}
                </Card.Text>
                <Card.Subtitle>
                  <span className="h4">{resortDetails.price} NOK</span>
                  <span className="fw-light">/night</span>
                </Card.Subtitle>
              </Card.Body>
            </Card.ImgOverlay>
            {resortDetails.rating && (
              <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
                <span className="align-middle rating-star">
                  <StarFill />
                </span>
                <span className="ps-2 pt-1">{resortDetails.rating}</span>
              </div>
            )}
          </Card>
        </SuperEllipse>
      </div>
    </Link>
  );
};

export default FeaturedResortCard;
