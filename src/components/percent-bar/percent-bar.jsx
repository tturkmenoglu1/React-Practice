import React, { useState } from 'react'
import { Button, ButtonGroup, ProgressBar } from 'react-bootstrap'
import { AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";

const PercentBar = () => {
  
  const [indicator, setindicator] = useState(0)

  const isValid = (value) => {
    if (value < 0) value = 0;
    setindicator(value)
  }

  return (
    <>
      <ButtonGroup>
          <Button variant="info" onClick={()=> isValid(indicator+10)}>
              +
          </Button>
          <Button variant='danger' onClick={()=> isValid(indicator-10)}>
              <AiFillMinusCircle/>
          </Button>
      </ButtonGroup>

      <ProgressBar now={indicator} label={`${now}%`} />
    </>
  )
}

export default PercentBar