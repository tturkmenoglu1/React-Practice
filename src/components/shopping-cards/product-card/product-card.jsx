import React from 'react'
import { Card, FormLabel } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import "./product-card.scss"

const ProductCard = ({ title, image, price, discount, rate }) => {
  
  const rateCal = () => {
    let rates=[];
    for (let i = 1; i <= 5; i++) {
      rates.push(rate >= i ? <AiFillStar /> : <AiOutlineStar/>);
    }
    return rates
  }

  return (
    <Card style={{ width: '18rem' }} className="card">
      <FormLabel>{discount}</FormLabel>
      <Card.Img variant="top" src={image} />
      <Card.Body className='body'>
        <Card.Text>{rateCal()}</Card.Text>
        <Card.Title text-center>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard