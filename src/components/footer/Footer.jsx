import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  function myfunc(){
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='bg-light border-top'>
        <div class="container">
  <footer class="pt-5 pb-2">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Main Pages</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to={'/'} onClick={myfunc()} class="nav-link p-0 text-muted">Home</Link></li>
          <li class="nav-item mb-2"><Link to={'/ha-council'} onClick={myfunc()} class="nav-link p-0 text-muted">HA Council</Link></li>
          <li class="nav-item mb-2"><Link to='/alumi' onClick={myfunc()} class="nav-link p-0 text-muted">Alumni Affairs</Link></li>
          <li class="nav-item mb-2"><Link to='/ir' onClick={myfunc()} class="nav-link p-0 text-muted">International Relations</Link></li>
          <li class="nav-item mb-2"><Link to='/hospital' onClick={myfunc()} class="nav-link p-0 text-muted">Hospital</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Others</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><Link to="/hostels" onClick={myfunc()} class="nav-link p-0 text-muted">Hostels</Link></li>
          <li class="nav-item mb-2"><Link to="/hall-manager-duties" onClick={myfunc()} class="nav-link p-0 text-muted">Hall Manager Duties</Link></li>
          <li class="nav-item mb-2"><Link to="/tenders" onClick={myfunc()} class="nav-link p-0 text-muted">Tenders</Link></li>
          <li class="nav-item mb-2"><Link to="/food-outlet-rating" onClick={myfunc()} class="nav-link p-0 text-muted">Food Outlet ratings</Link></li>
          <li class="nav-item mb-2"><Link to="/security" onClick={myfunc()} class="nav-link p-0 text-muted">Security Guidelines</Link></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 mb-3">
        <h5>Important Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/sustainabilitycell/" class="nav-link p-0 text-muted">Sustainability Cell</a></li>
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/portal/reachus/" class="nav-link p-0 text-muted">ReachUs Portal</a></li>
          <li class="nav-item mb-2"><a href="http://guesthouse.iitb.ac.in/" class="nav-link p-0 text-muted">Guest House Booking</a></li>
          <li class="nav-item mb-2"><Link to="/guest-accomodation-booking" onClick={myfunc()} class="nav-link p-0 text-muted">Guest Accomodation Booking</Link></li>
          <li class="nav-item mb-2"><a href="https://gymkhana.iitb.ac.in/portal/sac/" class="nav-link p-0 text-muted">SAC Room Booking</a></li>
        </ul>
      </div>

      <div class="col-md-4 text-center offset-md-1 mb-1">
          <h5 className='text-primary'>Hostel Affairs, IIT Bombay</h5>
          <img src={"./HA-logo.jpg"} className='w-50' alt="" />
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
      <p className='text-primary'>© 2022 Hostel Affairs Council, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex align-items-center">
        <li class="ms-3 fs-6">Developed by Balbir Yadav</li>
        <li class="ms-3"><a class="link-dark" href="https://github.com/Yadavbalbir"><i className='bi bi-github fs-5 text-dark'></i></a></li>
        <li class="ms-3"><a class="link-dark" href="https://www.facebook.com/Balbir.iitb"><i className='bi bi-facebook fs-5 text-primary'></i></a></li>
        <li class="ms-3"><a class="link-dark" href="https://www.linkedin.com/in/yadavbalbir/"><i className='bi bi-linkedin fs-5 text-primary'></i></a></li>
        <li class="ms-3"><a class="link-dark" href="https://github.com/Yadavbalbir"><i className='bi bi-instagram fs-5 text-danger'></i></a></li>
        {/* <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer;