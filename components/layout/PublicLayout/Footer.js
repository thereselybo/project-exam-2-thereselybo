import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fw-light text-center mt-5">
      <p className="mb-1">This website is made for educational purposes</p>
      <p className="mb-1">
        Assets for hotels and destinations borrowed from{" "}
        <Link href="https://www.ving.no">Ving</Link>
      </p>
      <p className="mb-1">
        Certain icons designed by{" "}
        <Link href="https://www.flaticon.com/authors/freepik">
          Freepik from Flaticon
        </Link>
      </p>
      <p className="mb-1">
        All illustrations from{" "}
        <Link href="https://www.freepik.com/">Freepik</Link>
      </p>
    </footer>
  );
};

export default Footer;
