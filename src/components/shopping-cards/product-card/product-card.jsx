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

  const priceCal = () => {
    let lastPrice;
      
    if (discount > 0) {
      lastPrice = Math.round(price - (price * discount / 100)).toFixed(2)
      return `<del>${price}</del>`, lastPrice;
    }
    else return price.toFixed(2)
    
  }

  return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Text className='label'>{discount>0 ? `-${discount}%` : ""}</Card.Text>
      <Card.Img variant="top" src={image} />
      <Card.Body className='body'>
        <Card.Text className='rate'>{rateCal()}</Card.Text>
        <Card.Title text-center>{title}</Card.Title>
        <Card.Text className='price'>${priceCal()}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard