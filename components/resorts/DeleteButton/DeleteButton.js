import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { BASE_URL, RESORTS_ENDPOINT } from "../../../constants/api";

import { Button, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import Message from "../../misc/Message";
import FormError from "../../misc/FormError";

const DeleteButton = ({ id, title, size, editing, content }) => {
  const [show, setShow] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const router = useRouter();
  const url = `${BASE_URL}${RESORTS_ENDPOINT}/${id}`;

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleDelete = async () => {
    setDeleteError(null);

    try {
      const res = await axios.delete(url);
      if (res.status === 200) {
        setDeleted(true);
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
      }
      console.log("deleting...");
    } catch (err) {
      setDeleteError(err.toString());
    }
  };

  return (
    <>
      <Button
        variant="danger"
        size={size}
        onClick={handleShow}
        disabled={editing}
      >
        {content}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
          <div className="close" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          {deleteError && <FormError>{deleteError}</FormError>}
          {deleted && (
            <Message
              className="my-2 p-2"
              message="Successfully deleted resort"
              variant="success"
            />
          )}
          Are you sure you want to delete {title}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteButton;
