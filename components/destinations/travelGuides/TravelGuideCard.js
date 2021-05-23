import Link from "next/link";
import Image from "next/image";
import SuperEllipse from "react-superellipse";

const TravelGuideCard = ({ destinationDetails }) => {
  return (
    <>
      <Link href={`/explore/${destinationDetails.slug}`}>
        <SuperEllipse
          className="m-auto p-5 ratio ratio-1x1"
          r1={0.03}
          r2={0.4}
          style={{
            background: "hsla(26, 59%, 90%, 0.8)",
          }}
        >
          <div>
            <Image
              src={destinationDetails.image}
              alt={destinationDetails.imageAlt}
              layout="fill"
              objectFit="cover"
              role="button"
            />
          </div>
        </SuperEllipse>
      </Link>
      <Link href={`/explore/${destinationDetails.slug}`} passHref>
        <h4 className="my-3 ms-2" role="button">
          {destinationDetails.title}
        </h4>
      </Link>
    </>
  );
};

export default TravelGuideCard;
