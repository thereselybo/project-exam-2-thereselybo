import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";

import Link from "next/link";
import ResortsDisplay from "../../components/admin/ResortsDisplay";
import Layout from "../../components/layout/adminLayout/AdminLayout";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../../components/misc/LoadingSpinner";
import Message from "../../components/misc/Message";

const Admin = () => {
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();
  const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

  useEffect(() => {
    const getResorts = async () => {
      try {
        const res = await http.get(url);
        if (res.status === 200) {
          setResorts(res.data);
        }
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    getResorts();
  }, []);

  return (
    <Layout title="Admin">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1>Resorts</h1>
        <Link href="/admin/add-resort" passHref>
          <Button variant="outline-primary">
            Add new <span className="d-none d-md-inline">resort</span>
          </Button>
        </Link>
      </div>
      {error && (
        <Message className="my-2 p-2" variant={danger} message={error} />
      )}
      {loading ? <LoadingSpinner /> : <ResortsDisplay resorts={resorts} />}
    </Layout>
  );
};

export default Admin;
