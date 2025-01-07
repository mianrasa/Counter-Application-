import React, { useState } from 'react'
import styled from 'styled-components'

const CounterApp = () => {

  let Button = styled.button`background-color: green; color: white; width: 70px; height: 50px;box-shadow : 10px 10px 10px green; border-color: green`

  let NewButton = styled(Button)`background-color: red; box-shadow : 10px 10px 10px red; border-color: red`

  let [count, setCount] = useState(0)

  function handleIncreace() {
    setCount((preCount) => preCount + 1);
  }
  function handleDecrease() {
    setCount((preCount) => preCount - 1);
  }

  return (
    <div>
      <center>
        <h1> Count - {count} </h1>
        <Button onClick={handleIncreace}> Increase </Button>
        <NewButton onClick={handleDecrease}> Decrease </NewButton>
      </center>
    </div>
  )
}

export default CounterApp