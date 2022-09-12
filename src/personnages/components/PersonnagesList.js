import React from 'react';
import { Row } from 'react-bootstrap';
import FilmCard from './FilmCard';

const PersonnagesList = ({personnages}) => {
  return (
    <row>
        {films.map((Personnage)  => (<PersonnagesCard title={film} date={film.release_date} />
        ))}
    </row>
  )
}

export default PersonnagesList;