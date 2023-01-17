import React from 'react'
import ProductCard from '../product-card/product-card'
import data from "./data.json"

const ProductList = () => {
  return (
      
          data.map((card) => (
              <ProductCard
                  key={card.id}
                  title={card.title}
                  image={require(`../../../assets/products/${card.image}`)}
                  price={card.price}
                  discount={card.discount}
                  rate={card.rate}
              />))
        
  )
}

export default ProductList