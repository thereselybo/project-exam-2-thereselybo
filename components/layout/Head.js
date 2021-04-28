import NextHead from "next/head";

const Head = ({ title = "" }) => {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Holidaze
      </title>
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      {/* <link rel="stylesheet" type="text/css" href="/icons/flaticon-font/flaticon.css" /> */}
    </NextHead>
  );
};

export default Head;
