import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const ResultCard = ({ decision, observaciones, itemName }) => {
  return (
    <div>
     <Card style={{width:'300px'}}>
     <Card.Title>{itemName}</Card.Title>
      <Card.Body>
        <Col>
          <Row>
            <Card.Title>Decisión</Card.Title>
            <Card.Text>{decision}</Card.Text>
          </Row>
          <Row>
            <Card.Title>Observaciones</Card.Title>
            <Card.Text>{observaciones}</Card.Text>
          </Row>
        </Col>
      </Card.Body>
    </Card>  
    </div>
  
  );
};

export default ResultCard;
