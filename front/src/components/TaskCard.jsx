import { Col, Card } from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function TaskCard({ index, task }) {
  return (
    <Col md={6} lg={3}  key={index}>
      <Card className="mb-4 bg-red-200 rounded py-2">
        <Card.Body>
          <Card.Title>Title: {task.title}</Card.Title>
          <Card.Text>Description: {task.description}</Card.Text>
          <Card.Text>Completed: {task.completed > 0 ? 'yes' : 'no'}</Card.Text>
          <Card.Text>Created at: {task.createdAt?.split('T')[0]}</Card.Text>
          <Link to={`/api/tasks/${task.id}`} className='bg-blue-400 rounded px-2'>Read</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};