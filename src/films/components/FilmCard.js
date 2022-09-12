import React from 'react'
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Card from '../../components/Card';
import { Link } from 'react-router-dom';


  const FilmCard = ({film}) => {
    return (
      <Col className="my-3">
      <link to={`/${film.id}`}>
        <Card>
          <BCard.Header as="small">{film.title}</BCard.Header>
          <BCard.Body>
            <BCard.Title>{film.release_date}</BCard.Title>
          </BCard.Body>
        </Card> 
      </link>
    </Col>
    )
  }

export default FilmCard

