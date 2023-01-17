import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({title,image,price,discount,rate}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard