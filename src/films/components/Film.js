import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FilmService from "../service/filmService";

const filmService = new FilmService()

const Film = () => {
    const [film, setFilm] = useState(null);
    const params = useParams();
    const getFilmById = async () => {
    if (params.id) {
    setFilm(await filmService.getFilmById(params.id));
    }
    };
    useEffect(() => {
    getFilmById();
    }, [params]);


  return (
    <div>
      
    </div>
  )
}

export default Film
