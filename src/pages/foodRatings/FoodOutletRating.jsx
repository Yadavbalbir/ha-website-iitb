import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./foodrating.css";

function FoodOutletRating() {
  document.title = "Food Quality Ratings | HA 2022-23"
  return (
    <div style={{backgroundImage:"url('./habg.jpg')", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
      <Navbar />
      <main>
        <div class="container py-4">
          <div class="p-5 mb-4 text-light">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Food Outlet Ratings</h1>
              <p class="col-md-8 fs-4">
                We have started a complaint form for your convenience in order
                to improve condition of the institute eateries. You can use this
                form to file a complaint about poor cleaning, unhygienic
                environment etc.
              </p>
              <a href="https://me-qr.com/f06rda8">
                <button class="btn btn-info btn-lg my-3 mx-4" type="button">
                  Feedback/Complaint Here
                </button>
              </a>{" "}
              <a href="https://docs.google.com/spreadsheets/d/11t8zv4NH6fH6eGhVnBS00xyCOfgcNif2UgE9_Ldi8O0/edit#gid=1187321856">
                <button
                  class="btn btn-outline-success btn-lg my-3"
                  type="button"
                >
                  Check Status
                </button>
              </a>
              {/* <div className="response">
                <p>You can track the status of your complaint</p>
                <a href="https://docs.google.com/spreadsheets/d/11t8zv4NH6fH6eGhVnBS00xyCOfgcNif2UgE9_Ldi8O0/edit?usp=sharing">
                  <button class="btn btn-primary btn-lg my-3" type="button">
                    Check Here
                  </button>
                </a>
              </div> */}
            </div>
          </div>

          <div className="testinomial container mt-5">
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 4.2
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 4.0 <br />
                      <i class="bi bi-alarm"></i> Last updated: 22.09.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-2 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hostel 3 Canteen  */}

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      {/* <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i> */}
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 3.0
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 3.0 <br />
                      <i class="bi bi-alarm"></i> Last updated: 25.09.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-3 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hostel-5  */}

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 4.3
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 4.3 <br />
                      <i class="bi bi-alarm"></i> Last updated: 11.10.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-5 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>

                      <i class="bi bi-star-half"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 3.3
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 3.0 <br />
                      <i class="bi bi-alarm"></i> Last updated: 26.08.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-9 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 2.9
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 2.5 <br />
                      <i class="bi bi-alarm"></i> Last updated: 09.10.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-12 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 2.9
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 2.5 <br />
                      <i class="bi bi-alarm"></i> Last updated: 09.10.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-13 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card card-cover h-100 overflow-hidden border text-bg-dark rounded-4">
                  <div class="d-flex flex-column h-100 p-4 pb-3 text-shadow-1">
                    <div className="stars text-warning">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>

                      <i class="bi bi-star-half"></i>
                    </div>
                    <h2 class="pt-2 mt-1 mb-4 display-9 lh-1 fw-bold">
                      Overall Rating : 3.6
                    </h2>
                    <p>
                      <i class="bi bi-star-fill"></i> Food Quality: 3.3 <br />
                      <i class="bi bi-alarm"></i> Last updated: 10.10.2022{" "}
                      <br />
                    </p>

                    <a href="https://gymkhana.iitb.ac.in/hostels/#/food-outlet-ratings">
                      <button class="btn btn-outline-success" type="button">
                        <i class="bi bi-basket pe-2"></i>
                        Check Menu
                      </button>
                    </a>

                    <ul class="d-flex list-unstyled mt-4">
                      <li class="me-auto">
                        <div className="d-flex">
                          <div className="px-3 text-info">
                            <h4 className="name fw-bolder fs-4">
                              HOSTEL-15 CANTEEN
                            </h4>
                            <p className="pos ">IIT Bombay</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FoodOutletRating;
