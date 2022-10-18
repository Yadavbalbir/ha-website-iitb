import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'


function HallManager() {


    document.title = "Hall Manager Duties | Hostel Affairs";

  return (
      <div style={{backgroundImage:"url(./habg.jpg)", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
        <Navbar/>
        <div className="container text-white d-flex flex-column my-3">
                <h2 className='text-warning text-center w-75 m-auto p-3'>Hall Manager Duties</h2>

                <div className="box  mt-3 p-4 bg-dark rounded-4">
                      <h6 className='text-bg-info d-inline-block rounded-2 p-2'>Note to students</h6>
                      <p className='fs-6'>Students shall go through the duties to understand the role and work of a hall manager in a hostel i.e address the complaints of the hostel to him/ her. Please make sure that the complaints are made in writing to the hall manager in order to have accountability of work.</p>
                      
                      <p>Please find the Hall Manager duties here- <a href='https://gymkhana.iitb.ac.in/~hostels/Hallmanagerduties.pdf' className='text-primary nav-link d-inline-block'>Hall-manager-duties</a></p>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HallManager