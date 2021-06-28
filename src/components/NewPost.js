import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';

export default function Post(props) {
    return (
        <Modal.Dialog>
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
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                name="title"
                                value={values.email}
                            />
                            {errors.title && touched.title && errors.title}
                            <input
                                name="content"
                                value={values.content}
                            />
                            {errors.content && touched.content && errors.content}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
};