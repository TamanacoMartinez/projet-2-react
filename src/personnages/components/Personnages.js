import FilmService from "../../films/service/filmService";
import PersonnageService from "../service/personnagesService";
import useGetData from "../../components/useGetData";

const filmService = new FilmService();
const personnagesService = new PersonnageService();

import React from 'react'

const Personnages = () => {
        const characters = useGetData(
        personnagesService.getById.bind(personnagesService),
        data?.characters
        );

  return (
    <div>
        {characters}
    </div>
  )
}

export default Personnages
