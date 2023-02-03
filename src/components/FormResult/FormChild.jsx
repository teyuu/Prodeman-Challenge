import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Col, Button, Card } from "react-bootstrap";
import { getResultsUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FormChild = ({ itemName }) => {
  
  const currentPlace = useSelector((state) => state.currentPlace);

  const [input, setInput] = useState({
    item_relevar: itemName,
    decision: "",
    observaciones: "",
    placeId: parseInt(currentPlace[0][0].id),
    userId: parseInt(currentPlace[0][0].userId),
  });


  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3001/form/result",
        input
      );
      if (result.data){
        setInput(result.data)
      } alert("Exito");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col}>
            <Form.Check
              type="checkbox"
              label="Si"
              name="decision"
              value="Si"
              checked={input.decision === "Si"}
              onChange={handleOnChange}
            />
            <Form.Check
              type="checkbox"
              label="No"
              name="decision"
              value="No"
              checked={input.decision === "No"}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Observaciones"
              name="observaciones"
              value={input.observaciones}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Tomar foto</Form.Label>
          </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormChild;

