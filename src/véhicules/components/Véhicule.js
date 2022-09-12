import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VehiculesService from "../service/vehiculesService";

const vehiculesService = new VehiculesService();

const Véhicule = () => {
    const [vehicule, setVehicule] = useState(null);
    const params = useParams();
    const getVehiculeById = async () => {
    if (params.id) {
    setVehicule(await vehiculesService.getVehiculeById(params.id));
    }
    };
    useEffect(() => {
    getVehiculeById();
}, [params]);
  return (
    <div>
      
    </div>
  )
}

export default Véhicule

