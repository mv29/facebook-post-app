import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Comment from '../components/Comment';
import { Formik } from 'formik';

export default function Post(props) {
  const { Title, content, emotions, createdAt, id, postCommented, commentsList, comments } = props;
  return (
    <div
      className="m-4"
      style={{ "margin": "auto", "display": "block" }}
    >
      <Card
        className={"m-2 p-2"}
        border={'primary'}
        bg={'secandory'}
        style={{ "width": "1000px" }}
      >
        <Card.Header className={"text-center"}>
          {Title}
          <span style={{ "float": "right" }}>{(new Date(createdAt)).toDateString()}</span>
        </Card.Header>
        <Card.Body style={{ "height": "200px" }} className="text-center">
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Button
                  style={{ "float": "left" }}
                  className="m-2"
                  variant="success"
                  onClick={() => console.log("like")}>
                  Like {emotions?.length}
                </Button>
              </div>
              <div className="col-9">
                <Formik
                  initialValues={{ comment: ''}}
                  onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    postCommented(id,values);
                    setSubmitting(false);
                    values=null;
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
        <div style={{ "overflow-y": "scroll", "text-align": "center" }}>
          {
            commentsList.map((comment) => {
              if(!comments.includes(comment.id)) return null;
              return <Comment {...comment} key={comment.id} />
            })
          }
        </div>
      </Card>
    </div>
  )
};