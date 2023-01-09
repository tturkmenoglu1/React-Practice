import React from 'react'
import Content from "./content/content"
import Sidebar from "./sidebar/sidebar"
import "./body.css"

const Body = () => {
  return (
    <div className='body'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Body