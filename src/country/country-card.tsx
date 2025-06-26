import React from 'react';
import { Card } from 'react-bootstrap';
// import { Country } from '../features/countriesSlice';
import { Country } from './country';

const CountryCard: React.FC<{ country: Country }> = ({ country }) => (
  <Card className="mb-3">
    <Card.Img variant="top" src={country.flag} alt={country.name} style={{ height: '150px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title>{country.name}</Card.Title>
      <Card.Text>Region: {country.region}</Card.Text>
    </Card.Body>
  </Card>
);

export default CountryCard;
