import React from 'react'
import { Link } from 'react-router-dom'
import us2 from "../Images/us2.jpg"
import us3 from "../Images/us3.jpg"
import us4 from "../Images/us4.jpg"
import us5 from "../Images/us5.jpg"
import us6 from "../Images/us6.jpg"
import us7 from "../Images/us7.jpg"
const Result = () => {
  return (
    <div class="container">
    <div  style={{ padding: 20, flex:1, height: "95vh" }}>
    <h1 style={{textAlign:'center'}}>Result of Collide</h1>
    <h4 style={{textAlign:'center'}}>The universe has the best outcomes of collides</h4>

    <h4> As I said earlier you can see that satisfaction of being complete and it is that time when there is satisfaction, peace and how the good thing inside of a bad person can be visible.</h4>

    <div class="row">
    <div class="col-sm">
     <img src={us2} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={us3} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={us4} class="img-fluid"/>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
     <img src={us5} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={us6} class="img-fluid"/>
    </div>
    <div class="col-sm">
    <img src={us7} class="img-fluid"/>
    </div>
  </div>
    <h4>NOTE: Reason to do all this was simple and I just tried adding some pre context, Hope you liked it</h4>
    <div class="d-flex align-items-center">
<button style={{backgroundColor: 'black', color:'white', padding:10, borderRadius:10,}}> <Link to={'/question'} style={{color:"white", textDecorationLine:"none"}}>conclusion </Link></button>
</div>
</div>
</div>
  )
}

export default Result