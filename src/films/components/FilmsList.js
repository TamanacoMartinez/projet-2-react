import React from 'react';
import { Row } from 'react-bootstrap';
import FilmCard from './FilmCard';

const FilmsList = ({films}) => {
  return (
    <row>
        {films.map((film)  => (<FilmCard title={film} date={film.release_date} />
        ))}
    </row>
  )
}

export default FilmsList
