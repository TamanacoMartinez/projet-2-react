import React, { useState, useEffect } from 'react'
import FilmService from '../service/filmService'
import { Container } from 'react-bootstrap';
import FilmsList from './FilmsList';
import { Link } from 'react-router-dom';

const filmService = new FilmService(); 

const Films = () => {
  const [data, setData] = useState ([]);

  const getFilms = async() => {
    const data = await filmService.getFilms();

    setData(data.results);

  }

  
  useEffect(() =>{
    getFilms();
  }, 
    
  []);

  return (
    <Container>
      <FilmsList films={data.results}/>
    </Container>
  )
}

export default Films
