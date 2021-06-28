import React from 'react';
import Card from 'react-bootstrap/Card'

export default function Post(props) {
    const { title, content, userId, comments, emotions, createdAt, id } = props;
    return (
        <div className="Container">
            <Card
                className={"m-2 p-2"}
                border={'primary'}
                bg={'secandory'}
                style={{ width: '18rem' }}
                key={id}>
                <Card.Header className={"text-center"}>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{createdAt}</Card.Footer>
            </Card>
        </div>
    )
};