// import React from 'react';
// import { use } from 'react';
import styled from 'styled-components'

let headingStyle = {
  backgroundColor: "red",
  color: "white",
  boxShadow: "10px 10px 5px black"
}

let Button = styled.button`background-color: blue; color: white; width: 100px; height: 50px;`

let NewButton = styled(Button)`background-color: red; box-shadow : 10px 10px 10px black`

const Content = () => {
  
  let user = "Raga"

  function print(e){
    console.log(e.target.innertext )
    // console.log('Hello there!')
    user = "Raga"
    console.log(user)
  }
  function print1(user){
    user = "Maha"
    console.log(user)
  }


  return (
    <main>
      <h1 style={headingStyle}>Main Content - {user} </h1>
      <Button onClick={() => print("hi")}> Click Me! </Button>
      <NewButton onClick={() => print1("hi")}> New Click Me! </NewButton>
    </main>
  );
};

export default Content;