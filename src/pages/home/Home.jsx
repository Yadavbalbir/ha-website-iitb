import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
// import { useEffect } from 'react';
import "./home.css"


function Home() {

    document.title = "Home | Hostel Affairs";

  return (
    <div>
        <Navbar/>
        <div className="">
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" class="active"  aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" aria-label="Slide 8" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="8" aria-label="Slide 9" class=""></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={"./insti-img/hostel-12.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item ">
                <img src={"./insti-img/main-building.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/boat-house.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/sameer-hill.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/swimming-pool.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/lecture-hall.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item active">
                <img src={"./insti-img/top-view.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/gymkhana.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/amazing.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        {/* About HA council =============================================================== */}
        <div className=" bg-white py-5">
          <div class="container  col-xl-12 px-4 mt-5 ">
            <div class="row align-items-center bg-light shadow g-lg-5 py-4">
              <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./HA-logo.jpg"} width="300px" alt="" />
              </div>
              <div class="col-lg-7 px-5 text-center text-lg-start">
                <h1 class="about display-5 fw-bold lh-1  mb-3" >About HA Council</h1>
                <p class="col-lg-10  fs-5">Hostel Affairs council holds the responsibility to provide better facilities and improvise the standards of students’ stay at IIT Bombay. Any improvisation or addition of the Infrastructure requirements, Security, Hospital, Internet, Accommodation, Housekeeping, Sustainability and Eateries are governed by the Hostel Affairs council.</p>
              </div>
            </div>
          </div>
        </div>



        {/* Msg from GSHA==================================================================== */}
         <div className="bg-white py-5">
          <div class="container px-4 mt-5 ">
            <div class="row align-items-center bg-light shadow g-lg-5 py-4">
             
              <div class=" px-5 text-center text-lg-start">
                <h1 class="about display-5 fw-bold lh-1 text-center mb-3">Message from GSHA</h1>
                 <div class="col-md-10 mx-auto text-center mt-5 col-lg-5">
                <img  class="rounded-circle" src={"./22-23/kartik.jpeg"} width="300px" alt="" />
              </div>
                <p class=" msg mt-5 mb-3 fs-5 container">You will hear it repeatedly from people that you are attending the nation's top engineering institute. We are not being arrogant when we say that; rather, it is the reality! The country’s brightest minds come to IIT Bombay every year as it is the best place to be for learning and personal development. So I once again congratulate you for making it to IIT Bombay. I heartily welcome you all! <br/>
                <br/>
                Everyone anticipates being rewarded in some way for the long and tough struggle it took to get here. But that simply isnt the case, you are welcomed to insti with the mumbai monsoons, with constant downpour of rainfall combined with the size of the campus where it seems impossible to get from one place to another. <br/>
                <br/>
                After living a comfortable life at your home, adjusting to the hostel life at IIT Bombay might be daunting to some, but as days pass you’ll see that the hostel life isnt all that bad. You would start enjoying being here and before you know it the hostel start feeling homely. To sum up everything, you will spend most memorable and enjoyable part of your life here at the campus.  <br/>
                <br/>
                This process of you getting accustomed to the hostel life is made easier because of the facilities provided by the hostels and the institute, be it your basic needs or your entertainment. Hostel Affairs is by far the most crucial component of the institute as it deals with the day to day functioning of students life. The necessary information regarding hostel facilities and services will be introduced in successive pages.<br/>
                <br/>
                Just like any case there is a lot more to hostel life than what I have mentioned, but this is something you will have to find out your self in your course through IIT Bombay. You can try learning new skills or honing your old ones with the freedom and resources available to you in the campus. At the end, when you look back you will realise how much you have developed over the course of your stay. For now,I will take your leave and hope to see you and have a nice interaction when you come to our beautiful campus.
                </p>
              </div>
            </div>
          </div>
        </div>

         {/* Contact Us =============================================================== */}
        <div className=" bg-light py-5">
          <div class="container  col-xl-12 px-4 mt-5 ">
            <div class="row align-items-center bg-white shadow g-lg-5 py-4">
              <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1664566545~exp=1664567145~hmac=2291c2fa1694791790ae4678d9cd07ab2741b4883b9f0508d5f000d685e73f92"} width="300px" alt="" />
              </div>
              <div class="col-lg-7 px-5 text-center text-lg-start">
                <h1 class="about display-5 fw-bold lh-1 " >Contact Us</h1>
                <p class="col-lg-10  fs-6">
                  <p className="msg">We are available on phone and email. We would recommend to contact us via email instead of calling directly. </p>
                  <div className='d-flex flex-column m-auto py-2 '>
                            <h6 className=""><span className='text-primary px-1'>Email:</span> 200100042@iitb.ac.in</h6>
                            <h6 className=""><span className='text-primary'>Phone:</span> 9871766546</h6>
                        </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Home;