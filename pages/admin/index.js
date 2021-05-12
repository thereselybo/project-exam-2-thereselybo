import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import Link from "next/link";
import Layout from "../../components/layout/AdminLayout/AdminLayout";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";
import ResortsDisplay from "./ResortsDisplay/ResortsDisplay";

import { Button, Card, Col, Row } from "react-bootstrap";

const Admin = ({ resorts }) => {
  // const [auth] = useContext(AuthContext);
  // console.log("auth", auth);
  // // const router = useRouter();

  // useEffect(() => {
  //   console.log("auth", auth);
  //   if (!auth) {
  //     // router.push("/");
  //   }
  // }, []);
  // // console.log(resorts);

  return (
    <Layout title="Admin">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Resorts</h1>
        <Link href="/admin/add-resort" passHref>
          <Button variant="outline-primary">
            Add new <span className="d-none d-md-inline">resort</span>
          </Button>
        </Link>
      </div>

      <ResortsDisplay resorts={resorts} />
    </Layout>
  );
};

export default Admin;

export const getStaticProps = async () => {
  let resorts = [];

  const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    resorts = res.data;
  } catch (err) {
    console.log("resort fetch error:", err);
  }

  return {
    props: {
      resorts,
    },
  };
};
