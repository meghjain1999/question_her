import React, { useState } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const Question = () => {
 
   const [image, setImage] = useState('https://media.tenor.com/LXoIGt520q0AAAAC/giving-heart.gif')
   const [downMessage, setDownmessage] = useState("")
   const [showButton, setShowButton] = useState(false)
  const changeTeddy = e => {
    //   document.getElementById("teddy").src = "happy_teddy.jpg";
    setDownmessage("Please, consider my request")
    e.target.style.left = `${Math.ceil(Math.random() * 90)}%`;
    e.target.style.top = `${Math.ceil(Math.random() * 90)}%`;
    }

    const changeMessage = e => {
      //   document.getElementById("teddy").src = "happy_teddy.jpg";
      setDownmessage("Please, Just click it")
     
      }

      const clickedYes = () => {
        setDownmessage("Thank you for your acceptance, I Love you")
        setImage("https://media1.giphy.com/media/qZuz60rhHdCLu/giphy.gif")
        setShowButton(true)
      }

      const clickedButton = () => {
        setShowButton(false)
        setImage("https://media.tenor.com/LXoIGt520q0AAAAC/giving-heart.gif")
        setDownmessage("")
      }
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
    <h1 style={{textAlign:'center'}}>Will you be my valentine, please?</h1>
    <img id="teddy" src={image} alt="Sad Teddy"/>
    <div id="buttons">
    <button class="btnNew" id="yes" onClick={clickedYes} onMouseOver={changeMessage}>Yes</button>
    <button class="btn" id="no"  onMouseOver={changeTeddy}>No</button>
    </div>

    <h1>{showButton ? "Thank you for your acceptance, I Love you" : downMessage}</h1>
    {showButton &&
      <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}} onClick={clickedButton}> <Link to={'/'} style={{color:"white", textDecorationLine:"none"}}>Back To Start </Link></button>}
      </div>
     
      </div>
  )
}

export default Question
// https://media1.tenor.com/images/a445dfb0f8be2583ea44b1a744548f40/tenor.gif?itemid=8015019
// https://media1.tenor.com/images/a8d66a4a6a7473ce29fb8ed9e7e55030/tenor.gif?itemid=15462496
// https://i.pinimg.com/originals/7d/bf/cd/7dbfcd3f8c251ff021667db9f663bc6c.gif