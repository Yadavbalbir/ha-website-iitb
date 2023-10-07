import React from 'react'
import Footer from '../../components/footer/Footer'

import Navbar from '../../components/navbar/Navbar'
import HA2021 from './HA2021'
import HA2122 from './HA2122'
import HA2223 from './HA2223'
import HA2324 from './HA2324'
import "./hacouncil.css"

function HaCouncil() {
    document.title = "Council | Hostel Affairs";

  return (
    <div className='bg-black' style={{backgroundImage:"url(./habg.jpg)", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
        <Navbar/>
        <HA2324/>

        {/* <HA2223/> */}
        
        {/* <HA2122/> */}
      
        {/* <HA2021/> */}

        <Footer/>
    </div>
  )
}

export default HaCouncil