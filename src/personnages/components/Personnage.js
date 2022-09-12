import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonnagesService from "../service/personnagesService";

const personnageService = new PersonnagesService();


const Personnage = () => {
    const [personnage, setPersonnage] = useState(null);
    const params = useParams();
    const getPersonnageById = async () => {
    if (params.id) {
    setPersonnage(await personnageService.getPersonnageByIdById(params.id));
    }
    };
    useEffect(() => {
    getPersonnageById();
    }, [params]);
  return (
    <div>
      
    </div>
  )
}

export default Personnage

