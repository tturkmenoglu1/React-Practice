import React from 'react'
import { Card, FormLabel } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductCard = ({ title, image, price, discount, rate }) => {
  
  const rateCal = () => {
    let a;
    for (let i = 1; i <= 5; i++) {
      a = a + (rate >= i ? <AiFillStar /> : <AiOutlineStar/>);
    }
    return a
  }

  return (
    <Card style={{ width: '18rem' }} className="">
      <FormLabel>{discount}</FormLabel>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title text-center>{title}</Card.Title>
        <Card.Text>{rateCal()}</Card.Text>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard