import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import ImageManipulation from './ImageManipulation'
import UseEffectWork from './UseEffectWork'
import Login from './login'
import Registration from './Registration'

function App() {
  return (
    <div>
    <div>
      <h2 style={{color:'red'}}>Hello React JS </h2>
      <h2>login form</h2>
      <Login />
    <br></br>
      <h2>registration form</h2>
      <Registration />
      
    <div>
      {}
    </div>
      <div>
        {/* {<UseEffectWork />} */}
        </div>
      <div>
        {/* <ImageManipulation /> */}
      </div>
      <div>
    {/* <StateHandling /> */}
    
      </div>
      <div>
    {/* <Student data={studentdata[]} /> */}
    
    {/* {
    studentdata.map((ele)=>{
    
      return(
        <Student data={ele} />
      )
    })
    
    } */}
      </div>
      <div>
        {/* <Student image={<img src={'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'} height={100} width={100} />}  name="Rahul Kumar" roll="23246" college="ABES Engineering College" /> */}
      
      </div>
    </div>
    
        </div>
      )
    }
  


export default App