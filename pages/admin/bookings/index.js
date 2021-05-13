import { useState } from "react";
import axios from "axios";
import Layout from "../../../components/layout/AdminLayout/AdminLayout";
import { BASE_URL, BOOKINGS_ENDPOINT } from "../../../constants/api";
import BookingDisplay from "./BookingDisplay/BookingDisplay";

const Bookings = ({ bookings }) => {
  return (
    <Layout title="Bookings">
      <h1>Bookings</h1>

      <BookingDisplay bookings={bookings} />
    </Layout>
  );
};

export default Bookings;

export const getStaticProps = async () => {
  let bookings = [];

  const url = `${BASE_URL}${BOOKINGS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    bookings = res.data;
  } catch (err) {
    console.log("booking fetch error:", err);
  }

  return {
    props: {
      bookings,
    },
  };
};
