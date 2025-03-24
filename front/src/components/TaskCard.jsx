import { Col, Card } from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function TaskCard({ index, task }) {
  return (
    <Col key={index}>
      <Link to={`/api/tasks/${task.id}`} className='btn btn-info text-black'>
        <Card className="col-md-4 mb-4 bg-red-200 rounded-lg p-2">
          <Card.Body>
            <Card.Title>Title: {task.title}</Card.Title>
            <Card.Text>Description: {task.description}</Card.Text>
            <Card.Text>Completed: {task.completed > 0? 'yes' : 'no'}</Card.Text>
            <Card.Text>Created: {task.createdAt?.split('T')[0]}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};