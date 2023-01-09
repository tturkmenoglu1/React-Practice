import React from 'react'
import Content from "./content/content.js"
import Sidebar from "./sidebar/sidebar.js"
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