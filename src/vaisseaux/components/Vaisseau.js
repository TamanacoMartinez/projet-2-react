import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VaisseauxService from "../service/vaisseauxService";

const vaisseauxService = new VaisseauxService();

const Vaisseau = () => {
    const [vaisseau, setVaisseau] = useState(null);
    const params = useParams();
    const getVaisseauById = async () => {
    if (params.id) {
    setVaisseau(await vaisseauxService.getVaisseauById(params.id));
    }
    };
    useEffect(() => {
    getVaisseauById();
}, [params]);
  return (
    <div>
      
    </div>
  )
}

export default Vaisseau

