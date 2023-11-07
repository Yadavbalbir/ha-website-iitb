import React from 'react'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import "./hostel.css"

function Hostels() {


  document.title = "Hostels | Hostel Affairs";

  return (
    <div style={{ backgroundImage: "url(./habg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100%", backgroundAttachment: "fixed", backgroundSize: "cover" }} >
      <Navbar />

      <div class="container px-4 py-5" id="custom-cards">
        <h1 class=" text-warning" style={{ textAlign: "center", fontFamily: "cursive" }} id="algo">All Hostels
        </h1>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">


          {/* Tansa details ====================================================== */}
          <div class="col w3-animate-zoom  shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg ">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Tansa House</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Tansa</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#tansa">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="tansa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Bhavya Bhargava <br />
                    Contact : 8700256083 <br />
                    Email : gsectansa@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~tansa/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-1 details ====================================================== */}
          <div class="col w3-animate-zoom  shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg ">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Queen of the Campus</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-1</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h1">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Rohit Kumar <br />
                    Contact : 8510018091 <br />
                    Email : gsech1@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel1"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>




          {/* Hostel-2 ===================================== */}

          <div class="col w3-animate-zoom shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">The Wild Ones</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-2</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h2">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Harsh Kumar Garg <br />
                    Contact : 6378328993 <br />
                    Email : gsech2@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel2"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          {/* Hostel-3 ======================================================== */}
          <div class="col w3-animate-zoom shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Vitruvians</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-3</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary fw-bolder" data-bs-toggle="modal" data-bs-target="#h3">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Loveneesh Lawaniya   <br />
                    Contact : 8954083866 <br />
                    Email : gsech3@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel3/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          {/* Hostel-4 ======================================================== */}



          {/* Hostel-5 ======================================================== */}
          <div class="col w3-animate-zoom shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">PENTHOUSE</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-5</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h5">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Pavan MS  <br />
                    Contact : 8792559981 <br />
                    Email : gsech5@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel5/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* Hostel-6 ======================================================== */}

          <div class="col w3-animate-zoom shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">VIKINGS</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-6</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h6">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Mayank Godara  <br />
                    Contact : 7300139009 <br />
                    Email : gsech6@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel6/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


          {/* Hostel-7 ======================================================== */}
          {/* Hostel-8 ======================================================== */}
          {/* Hostel-9 ======================================================== */}
          <div class="col w3-animate-zoom shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Pluto</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-9</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h9">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h9" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Shivam Vinod Patil   <br />
                    Contact : 7263093773 <br />
                    Email : gsech9@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel9/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-10 ======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Pheonix </h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-10</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h10">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Syama Mohan  <br />
                    Contact : 9544298500 <br />
                    Email : gsech10@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel10/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-11======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class="h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Athena</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-11</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h11">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h11" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Zofishan Iqra Anjum   <br />
                    Contact : 7836818192 <br />
                    Email : gsech11@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel11/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-12 ======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">Crown of Campus </h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-12</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h12">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h12" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Abhay pratap singh  <br />
                    Contact : 9450305339 <br />
                    Email : gsech12@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel12/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-13======================================================== */}
          <div class="col shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">House of Titans</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-13</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h13">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h13" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Sujeet Deore  <br />
                    Contact : 8421531699 <br />
                    Email : gsech13@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel13/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-14 ======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3  mb-2 display-6 lh-1 fw-bold">Silicon Ship</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-14</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h14">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h14" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Sachin Bodke  <br />
                    Contact : 9356624903 <br />
                    Email : gsech14@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel14/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-15 ======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3  mb-2 display-6 lh-1 fw-bold">Trident</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-15</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h15">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h15" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Astha Maurya  <br />
                    Contact : 8318384127 <br />
                    Email : gsech15@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel15/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-16 ======================================================== */}

          {/* Hostel-17 ======================================================== */}
          <div class="col shadow-lg shadow-sm ">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3  mb-2 display-6 lh-1 fw-bold">King's Landing</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-17</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h17">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h17" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Onkar Borade  <br />
                    Contact : 9326816398 <br />
                    Email : gsech17@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel17/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* Hostel-18 ======================================================== */}
          <div class="col shadow-lg shadow-sm">
            <div class=" h-100 overflow-hidden text-white  rounded-4 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <img src={"./insti-img/top-view.jpg"} className="rounded-3" alt="" />

                <h2 class="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">House of Titans</h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <h5 className='display-7 text-info fw-bold'> Hostel-18</h5>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <i class="bi bi-star-fill me-2 text-success" width="iem" height="1em"></i>
                    <small>1972</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#h18">
                      Know More
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal fade" id="h18" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title about" id="staticBackdropLabel">More About this hostel</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>
                    Gsec : Nithin Lakshmisha  <br />
                    Contact : 9890288661 <br />
                    Email : gsech18@iitb.ac.in
                  </p>
                  <a href="https://gymkhana.iitb.ac.in/~hostel18/"><button className="btn btn-primary">Visit Website</button></a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hostels