import { useState } from "react";
import axios from "axios";
import Layout from "../../../components/layout/adminLayout/AdminLayout";
import { BASE_URL, BOOKINGS_ENDPOINT } from "../../../constants/api";
import BookingDisplay from "../../../components/admin/BookingDisplay";

const Bookings = ({ bookings }) => {
  return (
    <Layout title="Bookings">
      <h1 className="mt-5 mb-4">Bookings</h1>

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
