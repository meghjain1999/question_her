import React from 'react'
import { Link } from 'react-router-dom'
import me1 from "../Images/me1.jpg"
import me2 from "../Images/me2.jpg"
import me3 from "../Images/me3.jpg"
import me4 from "../Images/me4.jpg"
import me5 from "../Images/me5.jpg"
import Me6 from "../Images/Me6.jpg"
const Me = () => {
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
        <h1 style={{textAlign:'center'}}>Hello I am MJ</h1>
        <h4 style={{textAlign:'center'}}>I also go by ("DUMBO", "SAVIOUR", "LAUDE", "BHADVA", and MAJORLY "HAVSI")</h4>

        <h4> SO, it's just a normal me i'e Megh who was all stupid, all misserable and weird and seriously not for this world or atleast someone who taught who doesn't belong with other people</h4>
        <h4> If you still think I am not the one mentioned above, you should ssly give a look on this photos I mean I know I was cute at first but later I guess Poverty hitted me really hard, hehe</h4>

        <div class="row">
    <div class="col-sm">
     <img src={me1} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me2} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me3} class="img-fluid"/>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
     <img src={Me6} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me4} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={me5} class="img-fluid"/>
    </div>
  </div>
        <div style={{margin:20}}>
    <button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/labdhi'} style={{color:"white", textDecorationLine:"none"}}> wanna see next? </Link></button>
    </div>
    </div>
    </div>
  )
}

export default Me