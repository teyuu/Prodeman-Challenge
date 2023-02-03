import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FormEdit from "./FormEdit";
import ResultCard from "./ResultCard";

const FormResult = () => {
  const currentPlace = useSelector((state) => state.currentPlace[0]);
  const results = useSelector((state) => state.results[0]);



  const elements = [
    {
      place: "casaPrincipal",
      elements: [
        "Rack Principal(limpieza)",
        "Rack Principal(Orden)",
        "Funcionamiento AP",
        "Funcionamiento teléfono",
        "UPS",
      ],
    },
    {
      place: "exAgroinsumos",
      elements: [
        "Rack Principal(limpieza)",
        "Rack Principal(Orden)",
        "Funcionamiento AP",
      ],
    },
    {
      place: "taller",
      elements: [
        "Rack Principal(limpieza)",
        "Rack Principal(Orden)",
        "Funcionamiento telefono",
        "Funcionamiento AP",
      ],
    },
    {
      place: "hangar",
      elements: [
        "Rack Principal(limpieza)",
        "Rack Principal(Orden)",
        "Funcionamiento telefono",
        "Funcionamiento AP",
      ],
    },
    {
      place: "hangarOficina",
      elements: ["Funcionamiento telefono", "Limpiar PC", "Acomodar cables"],
    },
    {
      place: "balanza",
      elements: [
        "Rack Principal(limpieza)",
        "Rack Principal(Orden)",
        "Funcionamiento AP",
        "Limpiar PC",
        "UPS",
        "Funcionamiento teléfono",
      ],
    },
    { place: "agroInsumos", elements: ["Funcionamiento AP"] },
    { place: "camaras", elements: ["Chequear visualizacion"] },
  ];

  if (currentPlace && currentPlace[0]) {
    const { name } = currentPlace[0];
    const { elements: filteredElements } =
      elements.find((e) => e.place === name) || {};

    return (
      <div className="container text-center border">
        <h5 className="text-center">Usted se encuentra actualmente en: </h5>
        <h2>{name}</h2>
        <div className="row">
          {filteredElements?.map((e) => (
            <div key={e} className="col-12 col-md-6 mb-3">
              <FormEdit itemName={e}  />
            </div>
          ))}
        </div>
        <div className="d-flex gap-5 flex-column flex-md-row align-items-center">
          {results?.map((e)=>{
            return <ResultCard key={e.id} itemName={e.item_relevar} decision={e.decision} observaciones={e.observaciones} />
          })}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default FormResult;
