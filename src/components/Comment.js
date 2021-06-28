import React from 'react';
import Card from 'react-bootstrap/Card';
import { Formik } from 'formik';;

export default function Comment(props) {
  const { content, userName, createdAt, id } = props;
  return (
    <Card
      className={"m-2 ml-5 p-2"}
      border={'seconday'}
      bg={'info'}
      style={{ "width": "800px" }}
      key={id}>
      <Card.Header className={"text-center"}>
        <span style={{ "float": "left" }}>Commented By {userName}</span>
        <span style={{ "float": "right" }}>{(new Date(createdAt)).toDateString()}</span>
      </Card.Header>
      <Card.Body style={{ "height": "auto" }} className="text-center">
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer className="">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Formik
                initialValues={{ comment: '' }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true)
                  setSubmitting(false);
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
                      className={"m-2"}
                      style={{ "width": "400px" }}
                      type="text"
                      id="comment"
                      name="comment"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                    {errors.content && touched.content && errors.content}
                    <button type="submit" disabled={isSubmitting} className={"m-2"}>
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
};