import Link from "next/link";
import Image from "next/image";
import SuperEllipse from "react-superellipse";

const TravelGuideCard = ({ key, destinationDetails }) => {
  return (
    // <div key={key}>
    <>
      <SuperEllipse
        className="m-auto p-5 ratio ratio-1x1"
        r1={0.03}
        r2={0.4}
        style={{
          // width: "80%",
          // height: "100%",
          background: "hsla(26, 59%, 90%, 0.8)",
        }}
      >
        <Link href={`/explore/${destinationDetails.slug}`}>
          <div>
            <Image
              src={destinationDetails.image}
              alt={destinationDetails.imageAlt}
              layout="fill"
              objectFit="cover"
              role="button"
            />
          </div>
        </Link>
      </SuperEllipse>
      <Link href={`/explore/${destinationDetails.slug}`}>
        <h4 className="my-3 ms-2" role="button">
          {destinationDetails.title}
        </h4>
      </Link>
      {/* </div> */}
    </>
  );
};

export default TravelGuideCard;
