import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL, BOOKINGS_ENDPOINT } from "../../../constants/api";
import BookingDisplay from "../../../components/admin/BookingDisplay";

import Layout from "../../../components/layout/adminLayout/AdminLayout";
import Message from "../../../components/misc/Message";
import LoadingSpinner from "../../../components/misc/LoadingSpinner";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();
  const url = `${BASE_URL}${BOOKINGS_ENDPOINT}`;

  useEffect(() => {
    const getBookings = async () => {
      try {
        const res = await http.get(url);
        if (res.status === 200) {
          setBookings(res.data);
        }
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    getBookings();
  }, []);

  return (
    <Layout title="Bookings">
      <h1 className="mt-5 mb-4">Bookings</h1>

      {error && (
        <Message className="my-2 p-2" variant={danger} message={error} />
      )}
      {loading ? <LoadingSpinner /> : <BookingDisplay bookings={bookings} />}
    </Layout>
  );
};

export default Bookings;