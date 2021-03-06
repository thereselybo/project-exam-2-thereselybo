import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL, MESSAGES_ENDPOINT } from "../../../constants/api";

import MessageDisplay from "../../../components/admin/MessageDisplay";
import Layout from "../../../components/layout/adminLayout/AdminLayout";
import LoadingSpinner from "../../../components/misc/LoadingSpinner";
import Message from "../../../components/misc/Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();
  const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await http.get(url);
        if (res.status === 200) {
          setMessages(res.data);
        }
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, []);

  return (
    <Layout title="Messages">
      <h1 className="mt-5 mb-4">Messages</h1>
      {error && (
        <Message className="my-2 p-2" variant={danger} message={error} />
      )}
      {loading ? <LoadingSpinner /> : <MessageDisplay messages={messages} />}
    </Layout>
  );
};

export default Messages;
