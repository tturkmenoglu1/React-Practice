import React, { useState } from 'react'
import { Button, ButtonGroup, Container, ProgressBar } from 'react-bootstrap'
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlinePlusCircle} from "react-icons/ai";

const PercentBar = () => {
  
  const [indicator, setindicator] = useState(0)

  const isValid = (value) => {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setindicator(value)
  }

  return (
    <Container className='mt-5'>
      <ButtonGroup>
          <Button variant="info" onClick={()=> isValid((prev)=> prev+10)}>
              <AiFillPlusCircle className='fs-3'/>
          </Button>
          <Button variant='danger' onClick={()=> isValid((prev)=> prev-10)}>
              <AiFillMinusCircle className='fs-3'/>
        </Button>
      </ButtonGroup>

      <ProgressBar className='mt-2' now={indicator} label={`${indicator}%`} />
    </Container>
  )
}

export default PercentBar