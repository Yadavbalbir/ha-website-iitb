import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import vikash from "../../images/24-25/vikas.jpg"
import habg from "../../images/habg.jpg"



// import { useEffect } from 'react';
import "./home.css"


function Home() {

    document.title = "Home | Hostel Affairs";

  return (
    <div className='home' style={{ backgroundImage: "url(./hostels/habg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100%", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
      <div className="landing">
        <Navbar/>
        <div className="welcome container w3-animate-zoom">
          <div className='welcome-title'>
            <h1 className="home-title-1 text-white text-center">WELCOME TO</h1>
             <h1 className='home-title-2 text-primary text-center'>Hostel Affairs Council</h1>
             <h1 className='home-title-3 text-white text-center'>IIT BOMBAY</h1>
          </div>
        </div>
      </div>
        {/* <div className="">
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
        </div> */}


        {/* About HA council =============================================================== */}
        <div className="trans py-1 py-5 ">
          <div class="container  col-xl-12 px- ">
            <div class="row align-items-center g-lg-5 py-4">
              <div class="col-lg-7 px-5 text-center text-light text-lg-start">
                <h1 class="about display-5 fw-bold lh-1  mb-3" >About Hostel Affairs Council</h1>
                <p class="col-lg-10  fs-5 msg">Hostel Affairs council holds the responsibility to provide better facilities and improvise the standards of students’ stay at IIT Bombay. Any improvisation or addition of the Infrastructure requirements, Security, Hospital, Internet, Accommodation, Housekeeping, Sustainability and Eateries are governed by the Hostel Affairs council.</p>
              </div>
               <div class="col-md-10 mx-auto text-center col-lg-5">
              <img src={"./hostels/pnglogo.png"} width="300px" alt="" />
              </div>
            </div>
          </div>
        </div>

         {/* Msg from GSHA =============================================================== */}
        <div className="trans  py-5">
          <div class="container  col-xl-12 px-4 mt-5 ">
            <div class="row align-items-center g-lg-5 py-4">
              <div class="col-md-10 mx-auto text-center col-lg-5">
              <img src={vikash} className="rounded-circle" width="300px" alt="" />
              </div>
              <div class="col-lg-7 px-5 text-center text-light text-lg-start">
                <h1 class="about display-5 fw-bold lh-1  mb-3" >Message from GSHA</h1>
                <p class="col-lg-10  fs-5">You're about to embark on a remarkable journey at IIT Bombay, hailed as the nation's top engineering institute. The brightest minds from across the country gather here to learn and grow. Congratulations on your admission, and a warm welcome to all... </p>
               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Read Full Msg
               </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"                aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title about" id="staticBackdropLabel">Full Message by GSHA</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <p class=" msg fs-5 text-black container">You're about to embark on a remarkable journey at IIT Bombay, hailed as the nation's top engineering institute. The brightest minds from across the country gather here to learn and grow. Congratulations on your admission, and a warm welcome to all of you! <br/>
                <br/>
                Adjusting to hostel life after the comforts of home might be a bit challenging at first, especially with the relentless Mumbai monsoons and the vast campus to navigate. But fret not, as days pass, you'll find yourself getting accustomed to it. The hostel life has its charm, and soon enough, it'll start feeling like a second home. <br/>
                <br/>
                The institute takes care of your needs and entertainment, making the transition smoother. Hostel Affairs plays a vital role in ensuring the daily functioning of student life. Throughout your journey, you'll uncover more than what words can express—discovering new skills, honing existing ones, and enjoying the freedom and resources available on campus. As time goes by, you'll look back and see how much you've grown during your stay. <br/>
                <br/>
                Now, I'll bid you farewell and eagerly await the day you set foot on our beautiful campus. I'm excited to have a pleasant interaction with you then! <br/>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
{/*====================== Verticles ================================================ */}

  <div class="container px-4 trans py-2" id="hanging-icons">
    <h1 class="about display-5 fw-bold lh-1  mb-3" >Hostel Affairs Verticles</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex text-info align-items-start">
        <div class="fs-3 me-3 mt-2">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Hygiene Committee</h3>
          <p>Hygiene committee has been recently established to formalize the functioning of canteens, institute outlets, messes. Hygiene committee Holds the responsibility to conduct surprise visits...</p>
           <Link to="/hygiene-committee" target="_blank"><button className="btn btn-primary ">Know more</button></Link>
        </div>
      </div>
      <div class="col d-flex text-info align-items-start">
        <div class="icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Sustainability Cell </h3>
          <p>IIT Bombay's Sustainability Cell serves as the hub for all the institute's sustainable development innovations, research, and teachings. We want to raise awareness about sustainability on campus... </p>
          <a href="https://gymkhana.iitb.ac.in/sustainabilitycell/" class="btn btn-primary">
             Know More
          </a>
        </div>
      </div>

      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Gender Cell</h3>
          <p>The IIT Bombay Gender Cell (GC) inquires into complaints of sexual harassment through its Internal Complaints Committee (ICC). The GC and ICC strive to work towards an egalitarian...</p>
          <a href="https://www.gendercell.iitb.ac.in/index.php" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>

      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Security</h3>
          <p>Security as is befitting an institute of our stature and importance, security at Main gates is very effective. We also have trained officers as Quick Response Team which is available ...</p>
          <a href="https://docs.google.com/document/d/1vB78qVeErd-vfo49Qj-p3-Px1bWOO81ZX-eTly6ZKIo/edit?usp=sharing" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>


      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Eateries</h3>
          <p>From lunch thali to pizzas, you will find plenty of options around campus. Hiranandani is situated at a walking distance from IIT Bombay. It boasts some fantastic coffee shops...</p>
          <a href="https://docs.google.com/document/d/1_CT0dncsFeSw8fLZ6-S9zDzX2j_xBIT2J3_Lj8_Y-ok/edit?usp=sharing" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>




        <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Hospital</h3>
          <p>IITB Hospital is a primary care hospital for medical treatment of students and staffs. All the bonafide students of the institute are entitled to free medical attendance ...</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

        <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">International Relation</h3>
          <p>The International Relations office overseas and coordinates all International activities of IIT Bombay, including: developing and defining relationships and collaborations with foreign...</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

         <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Transportation</h3>
          <p>There is wide varieties of transportation available in
IITB.Firstly the buggies present in the institute are
available during the day time. They are total 6 in number as of now and ...</p>
          <a href="https://docs.google.com/document/d/1X9b8MXpmTSt2B8VlEr5NDUkRg3vqIHK2ukp6iyEuaFk/edit?usp=sharing" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

    </div>
  </div>
                
     {/* Meet HA Council members =============================================================== */}
        <div className="trans ">
          <div class="container  col-xl-12 px-4 mt-2 ">
            <h1 class="about display-5 fw-bold lh-1 " >Meet HA Council Members</h1>
            <div class="row align-items-center g-lg-5">
              
              <div class="col-lg-7 px-5 text-center text-lg-start">
                <p class="col-lg-10 ">
                  <p className="msg text-white fs-4"> Hostel Affairs Council consist of 16 Students led by elected General Secretry of Hostel Affairs responsible for different kind of work. </p>
                  <div className='py-2 '>
                  <Link to="/ha-council" target="_blank"><button className="btn btn-primary ">View HA Council 2024-25</button></Link>
                  </div>
                </p>
              </div>

              <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./haCouncil.png"} style={{objectFit:"cover", width:"100%"}} alt="" />
              </div>

            </div>
          </div>
        </div>

  

         {/* Contact Us =============================================================== */}
        {/* <div className="trans ">
          <div class="container  col-xl-12 px-4 mt-2 ">
            <div class="row align-items-center g-lg-5 py-4">
                            <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./contact.png"} style={{objectFit:"cover", width:"100%"}}alt="" />
              </div>

              <div class="col-lg-7 px-5 text-center text-lg-start">
                <h1 class="about display-5 fw-bold lh-1 " >Contact Us</h1>
                <p class="col-lg-10  fs-4 msg">
                  <p className="msg text-light">For any queries regarding above given verticals and in general issues related to Hostel affairs council contact us on the given on the  </p>
                  <div className='d-flex flex-column m-auto py-2 '>
                            <h6 className="text-white"><span className='text-primary px-1'>Email:</span>gsecha@iitb.ac.in</h6>
                           
                    </div>
                </p>
              </div>


            </div>
          </div>
        </div> */}

        <Footer/>
    </div>
  )
}

export default Home;