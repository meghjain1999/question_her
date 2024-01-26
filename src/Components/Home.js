import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: 20, flex:1, height: "95vh" }}>
    <div style={{justifyContent:"center", flexDirection:"row", alignItems:"center", display:"flex"}}>   
    <h1 style={{textAlign:"center", marginRight:20}}> Hello LJ</h1>
    <img src='http://pluspng.com/img-png/heart-png--3100.png' height="50" width="50" />
    </div> 
    <h4 style={{marginBottom:20, marginTop:20}}> I know we had word of how you wanted it badly that I should do something for you with my coding skills.</h4>
    <h4 style={{marginBottom:20}}> So, I thought why not give it a try and see what I can do out of it.</h4>
    <h4 style={{marginBottom:20}}> I know I am not best at it but still trying to show that I am important in coding stuff, hehe</h4>
    <h4 style={{marginBottom:20}}> Before moving forward let me seriouly tell you I have made this in just few hours, actually not even few hours so if somewhere it's not upto your expectation. I genuinely apoligize.</h4>
    <h4 style={{marginBottom:20}}> Let get started, shall we?</h4>
    <div class="d-flex align-items-center">
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/me'} style={{color:"white", textDecorationLine:"none"}}> Click Me, Please </Link></button>
    </div>
  </div>
  )
}

export default Home