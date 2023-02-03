import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Container } from "react-bootstrap";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getResultsUser } from "../../redux/actions";



const FormWithEditButton = ({ itemName }) => {
  const currentPlace = useSelector((state) => state.currentPlace);
  const [isEditing, setIsEditing] = useState(false);
  const [isSent, setIsSent] = useState(false);

 

  const [formData, setFormData] = useState({
    item_relevar: itemName,
    decision: "",
    observaciones: "",
    placeId: parseInt(currentPlace[0][0].id),
    userId: parseInt(currentPlace[0][0].userId),
  });



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3001/form/result",
        formData
      );
      if (result.data) {
        setIsSent(true);
        alert("Exito");
      }
    } catch (e) { 
      console.log(e);
    }
  };

	const handleSubmitEdit= async(e)=>{
		e.preventDefault();

		try{
			const resultEdit = await axios.patch('http://localhost:3001/form/editresult', formData)
			if(resultEdit.data[0] === 1){
				console.log(resultEdit.data[0])
				alert("Actualizado exitosamente")
			}else{
				alert('No se actualizo che')
			}
		}catch(err){
			console.log(err)
		}
		
	}



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>{itemName}</h2>

        <FormControl
          type="text"
          placeholder="Decision"
          name="decision"
          value={formData.decision}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <FormControl
          type="text"
          placeholder="Observaciones"
          name="observaciones"
          value={formData.observaciones}
          onChange={handleChange}
          disabled={!isEditing}
        />

        <Button variant="primary" onClick={handleEdit}>
          {isEditing ? "Finalizar edición" : "Editar"}
        </Button>

        {isEditing ? (
          <Button variant="success" disabled={!isSent} onClick={handleSubmitEdit} >
            Enviar edición
          </Button>
        ) : null}

        {!isSent && !isEditing ? (
          <Button type="submit" variant="success" disabled={isEditing}>
            Enviar
          </Button>
        ) : null}
      </Form>
    </Container>
  );
};

export default FormWithEditButton;
