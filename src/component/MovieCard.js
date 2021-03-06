import React from 'react'
import {Card } from 'react-bootstrap'
import ReactStars  from 'react-stars';
/*card*/
const MovieCard =({movieCard}) => (
  <div className="MovieCard" > 
  <Card style={{ width: '19rem' , height:'600px' ,backgroundColor:'#000000',textAlign:'center',color:'white',border:'3px solid',borderRadius:'20px'}} >
  <Card.Img variant="top" width='200px' height='300px'  style={{ borderRadius:'20px',marginTop:'10px'}}  src={movieCard.posterUrl} />
  <Card.Body>
    <Card.Title> {movieCard.title} </Card.Title>
    <Card.Text> {movieCard.description} </Card.Text>
    <ReactStars starCount={5} value={movieCard.rating}/>
  </Card.Body>
</Card>
  </div>

);
export default MovieCard;