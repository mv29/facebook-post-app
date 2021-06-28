import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import { generatedId } from "../commonHelpers";
import Button from 'react-bootstrap/Button';

export default function Post(props) {
  const { setPostList, currentUser, show, handleClose } = props;

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    setPostList((prevPosts) => {
      return [
        ...prevPosts,
        {
          id: generatedId(),
          Title: values.title,
          content: values.content,
          currentUserId: currentUser.id,
          emotions: [],
          comments: [],
          createdAt: new Date().toString(),
        }
      ]
    });
    setSubmitting(true);
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ title: '', content: '' }}
          validate={values => {
            const errors = {};
            if (!values.content) {
              errors.email = 'Required';
            }
            if (!values.title) {
              errors.email = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                className={"d-block m-2"}
                style={{ "width": "400px" }}
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
              <input
                className={"d-block m-2"}
                style={{ "width": "400px" }}
                id="title"
                type="text"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              {errors.content && touched.content && errors.content}
              <button type="submit" disabled={isSubmitting} className={"m-2"}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
};