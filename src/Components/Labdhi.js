import React from 'react'
import { Link } from 'react-router-dom'
import la1 from "../Images/la1.jpg"
import la2 from "../Images/la2.jpg"
import la3 from "../Images/la3.jpg"
import la4 from "../Images/la4.jpg"
import la5 from "../Images/la5.jpg"
import la6 from "../Images/la6.jpg"
const Labdhi = () => {
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
        <h1 style={{textAlign:'center'}}>This is LJ</h1>
        <h4 style={{textAlign:'center'}}>I also go by ("CHIKU", "COOKIE", "LAUDI", "BHADVI", and MAJORLY "HAVSI")</h4>

        <h4> She is LJ, she was literally opposite of me like she was living the best she could and always in demand and she was cute too, can't say hot for obvious reasons. </h4>
        <h4> The reason for megh saying good things about her is below you can give it a look by your own</h4>

        <div class="row">
    <div class="col-sm">
     <img src={la1} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la2} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la3} class="img-fluid"/>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
     <img src={la4} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la5} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={la6} class="img-fluid"/>
    </div>
  </div>
        <h4 style={{marginTop:20, marginBottom:20}}> For some reasons she is still not complete I mean you can see happiness and everything except satisfaction and I will show you what satisfaction looks like if someone finds it, later</h4>
        <div class="d-flex align-items-center">
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/collide'} style={{color:"white", textDecorationLine:"none"}}> Story </Link></button>
    </div>
    </div>
    </div>
  )
}

export default Labdhi