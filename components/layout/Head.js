import NextHead from "next/head";

const Head = ({ title = "" }) => {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Holidaze
      </title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  );
};
