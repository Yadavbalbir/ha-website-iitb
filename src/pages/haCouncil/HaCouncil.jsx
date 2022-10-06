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
    <div className='bg-black' style={{backgroundImage:"url(https://img.freepik.com/free-vector/digital-technology-background-with-blue-orange-light-effect_1017-27423.jpg?w=1380&t=st=1665020579~exp=1665021179~hmac=c270d4f80c6ad288159eb1edfcc7229c7478138a10f1da651f77b95824c60926)", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
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