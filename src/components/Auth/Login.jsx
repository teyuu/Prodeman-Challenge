import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {saveUser} from '../../redux/actions'
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const user =  await axios.post('http://localhost:3001/api/user/login', {email, password})
        if(user.data){
            localStorage.setItem("user", JSON.stringify(user.data))
            dispatch(saveUser())
            alert('Ha ingresado correctamente')
            console.log(user.data)
            navigate('/home')
        }
    }catch(error){
        alert('Correo o contraseña incorrecto')
    }
  };



  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
