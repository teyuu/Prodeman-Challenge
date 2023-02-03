import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Registration = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    try{

        const user = await axios.post('http://localhost:3001/api/user/signup', {userName, email, password, team})
        if(user.data === "username already taken"){
            alert("Usuario ya existente")
        }else if(user.data === "email already exist"){
            alert('Correo ya existente')
        }else{
            alert('Se ha registrado correctamente')
            console.log(user.data)
        }
    }catch(error){
        alert(error)
        console.log(error + 'eto e lo que sale')
    }   
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

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

            <Form.Group controlId="formBasicTeam">
              <Form.Label>Team</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter team"
                value={team}
                onChange={(event) => setTeam(event.target.value)}
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

export default Registration;
