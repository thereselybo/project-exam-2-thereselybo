import NextHead from "next/head";

const Head = ({ title = "" }) => {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Holidaze
      </title>
      <link rel="shortcut icon" href="/icons/favicon.ico" />
    </NextHead>
  );
};

export default Head;
