import React from 'react'
import Header from '../../header/header'
import Moives from '../../moives/Moives'
import BestTv from '../../BestTv/BestTv'
import Membership from '../../Membership/Membership'
import  Sampleimage from '../../Streming/Streming'
import Services from '../../services/Services'
function home(props) {
 
  return (
    <>
    <Header />
    <Moives mynewfilms={props.myfilms}/>
     <Services />
    <BestTv mybestfilms={props.myfilms}/>
    < Sampleimage />
    <Membership/>
    </>
  )
}

export default home
