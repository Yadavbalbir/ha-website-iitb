import React from 'react'
import Footer from '../../components/footer/Footer'

import Navbar from '../../components/navbar/Navbar'
import HA2021 from './HA2021'
import HA2122 from './HA2122'
import HA2223 from './HA2223'
import "./hacouncil.css"

function HaCouncil() {
    document.title = "Council | Hostel Affairs";

  return (
    <div  style={{backgroundImage:"url('./bggif.gif')", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
        <Navbar/>
        <HA2223/>
        {/* 2021-2022 Members  */}  
        
        <HA2122/>
        <div className="mt-5"></div>
      
        {/* <HA2021/> */}

        <Footer/>
    </div>
  )
}

export default HaCouncil