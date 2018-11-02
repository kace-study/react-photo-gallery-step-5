import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import './Photo.css';

const Photo = ({ photo }) =>  {
  return (
    <Card className="mb-3 text-center">
      <CardImg 
        top 
        width="250px" 
        height="250px" 
        src={photo.webformatURL}/>
      <CardBody>
        <CardText>{photo.user}</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;