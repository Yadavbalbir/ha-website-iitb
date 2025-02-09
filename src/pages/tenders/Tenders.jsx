import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import './tenders.css'

function Tenders() {
  document.title = "Tenders | Hostel Affairs";

  return (
    <div>
      <Navbar />
      <div className="container text-white d-flex flex-column my-5">
        <div className="liveTenders mb-5">
          <h1 className="title text-warning py-2 border-bottom ">
            {" "}
            <span className="text-warning"> Live Tenders 2022</span>
          </h1>
          <div className="mess px-3 my-4">
            <h4 className="text-info inline-block ">
              Mess Tender 2022{" "}
              <span className="fs-6 text-bg-danger rounded-2 px-2">
                Live Now
              </span>{" "}
            </h4>

            <div className="update px-3 border-bottom py-3  my-2">
              <h4 className="   fs-3">
                Commercial Bid{" "}
               
                  <span className="fs-5 text-bg-danger blink tq rounded-2 px-2">
                    Important
                  </span>
               
              </h4>
              <li>
                Commercial Bid opeing for the Tender will be done on
                <b>23rd December 2022, Friday at 4:00 PM</b>
              </li>
            </div>

            <div className="update px-3 my-4">
              <h4 className="  fs-3">
                Technical Qualification{" "}
                <span
                  id="blink"
                  className="fs-5 text-bg-info tq rounded-2 px-2"
                >
                  new
                </span>
              </h4>
              <p>
                Following people have qualified the technical document
                scrutiny., Our visiting team will visit the given reference
                locations of the following caterers in the time span between{" "}
                <b>10th December to 17th December.</b>
              </p>
              <div className="list1 p-3 mb-2  fs-5 ">
                <li>K Star</li>
                <li>Shridevi Hospitality Services</li>
                <li>Arjun Hospitality</li>
                <li>Compass</li>
                <li>Shree Annapurneshwari Allied Services</li>
                <li>Annapurna Catering Services</li>
                <li>Shridevi Hospitality</li>
                <li>Kwality Hospitality Services</li>
                <li>Vehar Canteen Services</li>
                <li>Vidya Caterers</li>
                <li>Saisha Hospitality Services</li>
                <li>V. N. Caterers</li>
                <li>Cheftalk Food and Hospitality</li>
                <li>Kuber Health Food and Allied Services</li>
                <li>Dietico</li>
                <li>Malhar Catering Services</li>
                <li>Pooja Hospitality</li>
                <li>Shree Chakra Catering</li>
                <li>Agrotis Catering Services</li>
                <li>Abhinandan Caterers</li>
                <li>Sai Siddhi Hospitality</li>
                <li>Sai Cuisine Hospitality</li>
                <li>Kanaka</li>
                <li>Prithvi Hospitality</li>
                <li>Saanvi Star</li>
                <li>Balaji Caterer</li>
                <li>Sai Balaji Caterers</li>
                <li>Shree Sai Balaji</li>
                <li>KHFM</li>
                <li>Venture Professionals</li>
                <li>Super Care</li>
                <li>Shri Devi Caterers</li>
              </div>
              <b>Note:</b> This list is combined list for both the tenders
              (Hostel 2/6/10/15) and (Hostel 16/18/5).
            </div>
            <div className="details border-top py-4 px-3 my-4">
              <li className="fs-5">
                Mess tender H-2, 6, 10, 15
                <a
                  href="https://drive.google.com/file/d/1TwfNdwmYbugu08dFM1bHFGm84lhonEhE/view?usp=sharing"
                  className="text-info fs-6 text-decoration-none text-bg-primary text-white px-2 rounded-2 mx-2"
                >
                  {" "}
                  click to download{" "}
                </a>
              </li>
              <div className="notice border rounded-4 p-2 my-4 px-4">
                <h4 className="title text-center text-info ">Notice</h4>
                <p className="main">
                  Hostel 2,6,10 and 15 are going for mess tendering. The tender
                  document pdf is attached above.
                </p>
                <ol className="">
                  <li>
                    {" "}
                    The pre-bid meeting is scheduled on 26/10/2022 at 4 PM in
                    Hostel 17, Dining Hall, IIT Bombay - 400076.
                  </li>
                  <li>
                    {" "}
                    The Last date for bid submission, along with all the
                    necessary documents is 10/11/2022 at 5 PM.
                  </li>
                  <li>
                    {" "}
                    Technical Bids will be opened on 25/11/2022 at Dean SA
                    Office, IITB.
                  </li>
                  <li>
                    {" "}
                    The list of all the eligible caterers after opening of
                    technical bids will be published on Hostel Affairs, IITB
                    Website on 25/11/2022
                  </li>
                </ol>
              </div>
            </div>

            <div className="details px-3">
              <li className="fs-5">
                Mess tender H-5, 16, 18
                <a
                  href="https://drive.google.com/file/d/1JVvYhERf2FdL3hgOMCzVG96CtQsNzqCM/view?usp=share_link"
                  className="text-info fs-6 text-decoration-none text-bg-primary text-white px-2 rounded-2 mx-2"
                >
                  {" "}
                  click to download{" "}
                </a>
              </li>
              <div className="notice border rounded-4 p-2 my-4 px-4">
                <h4 className="title text-center text-info ">Notice</h4>
                <p className="main">
                  Hostel-5, 16, 18 are going for mess tendering. The tender
                  document pdf is attached above. more details will be updated
                  here
                </p>
                <ol className="">
                  <li>
                    {" "}
                    The pre-bid meeting is scheduled on 26/10/2022 at 4 PM in
                    Hostel 17, Dining Hall, IIT Bombay - 400076.
                  </li>
                  <li>
                    {" "}
                    The Last date for bid submission, along with all the
                    necessary documents is 10/11/2022 at 5 PM.
                  </li>
                  <li>
                    {" "}
                    Technical Bids will be opened on 25/11/2022 at Dean SA
                    Office, IITB.
                  </li>
                  <li>
                    {" "}
                    The list of all the eligible caterers after opening of
                    technical bids will be published on Hostel Affairs, IITB
                    Website on 25/11/2022
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="tender2021">
          <h2 className="title text-warning border-bottom py-2 mt-2">
            Tenders 2021 [<span className="text-danger">Closed</span>]
          </h2>
          <div className="mess px-3 my-4">
            <h4 className="text-info">Mess Tender</h4>
            <div className="details px-3">
              <li>
                <a
                  href="https://gymkhana.iitb.ac.in/~hostels/contract/Mess_Tender_2021.pdf"
                  className="text-decoration-none"
                >
                  Mess tender2021 details
                </a>
              </li>

              <p className="muted-text ">
                Following people have qualified the technical document
                scrutiny., Our visiting team has visited most of them and the
                committee will be realizing the Technical shortlist by{" "}
                <b>10 PM, 20th December</b> on the order of Priority.
              </p>

              <p className="muted-text">
                The commercial bid meeting is shifted to{" "}
                <b>21st December, 4 PM</b>
              </p>

              <p className="muted-text">
                Venue of opening bid:{" "}
                <b>Dean SA Office, Main Building, IIT Bombay</b>
              </p>

              <div className="list fs-6">
                <div className="list1">
                  <li>M/S. VIDYA CATERERS</li>
                  <li>KANAKA FOOD MANAGEMENT SERVICES</li>
                  <li>ANNAPURNA CATERING SERVICES</li>
                  <li>CHEF TALK FOOD AND HOSPITALITY</li>
                  <li>SUPERCARE CATERING SERVICES</li>
                  <li>SHREE ANNAPURNESHWARI ALLIED SERVICES</li>
                  <li>K STAR FOOD AND HOSPITALITY SERVICES</li>
                  <li>SHREE CHAKRA GOURMET SERVICES PVT LTD.</li>
                  <li>SAISHA HOSPITALITY SERVICES</li>
                  <li>COMPASS GROUP</li>
                  <li>SAI CUISINE HOSPITALITY SERVICES PVT LTD.</li>
                  <li>KUMAR FOOD MANAGEMENT SERVICES</li>
                  <li>CRYSTAL HOSPITALITY SERVICES</li>
                  <li>ANJALI SERVICES PVT LTD.</li>
                </div>

                <div className="list2">
                  <li>KUBER HEALTHFOOD {"&"} ALLIED SERVICES</li>
                  <li>DIETICO HEALTHFOOD AND ALLIED SERVICES</li>
                  <li>PRITHVI HOSPITALITY SERVICES</li>
                  <li>SHREE SAI BALAJI HOSPITALITY</li>
                  <li>V.N.CATERERS</li>
                  <li>VEHAR CANTEEN SERVICES</li>
                  <li>SHREE SUKHSAGAR HOSPITALITY SERVICES</li>
                  <li>SHREE SIDDHIVINAYAK CATERERS</li>
                  <li>ABHINANDAN CATERERS</li>
                  <li>INDUSTRIAL CATERERS</li>
                  <li>SAI BALAJI CATERERS</li>
                  <li>STALLION OFFSHORE LOGISTICS PVT LTD.</li>
                  <li>SAANVI STAR HOSPITALITY PVT LTD.</li>
                </div>
              </div>
            </div>
          </div>

          <div className="cafe text-white px-3 my-4">
            <h4 className="text-info">Cafe Tender</h4>
            <div className="details px-3">
              <li>
                <a
                  href="https://https://gymkhana.iitb.ac.in/~hostels/contract/THE_TENDER_draft_1.pdf.iitb.ac.in/~hostels/contract/Mess_Tender_2021.pdf"
                  className="text-decoration-none"
                >
                  Cafe tender 2019 details
                </a>
              </li>

              <p className="muted-text pt-2 px-3">
                Last date for submitting the tender document for the cafe has
                been shifted to 9th September 2019, 5PM
              </p>
            </div>
          </div>

          <div className="cafe text-white px-3 my-4">
            <h4 className="text-info">Mess Tender 2019</h4>
            <div className="details px-3">
              <li>
                <a
                  href="https://https://gymkhana.iitb.ac.in/~hostels/contract/THE_TENDER_draft_1.pdf.iitb.ac.in/~hostels/contract/https://gymkhana.iitb.ac.in/~hostels/contract/Mess-Tender-2019-for-H-3910111618.pdf.pdf"
                  className="text-decoration-none"
                >
                  mess tender 2019 details
                </a>
              </li>

              <p className="muted-text fs-5 px-3">
                The commercial bid meeting is shifted to 25th June 4PM
              </p>

              <p className="muted-text px-3">
                We are in the process of selection of catering contractors for
                the mess in the Hostels : 10, 16 and 18. Hostel-3,9,11 have
                withdrawn from mess tendering due to some technical issues. Bids
                will not be open for the hostel-3,9 and 11. Last date to fill
                the tender is 30th May.
              </p>
            </div>
          </div>
        </div>

        <div className="tender2019 ">
          <h2 className="title text-warning border-bottom py-2 mt-2 ">
            Tenders 2019 [<span className="text-danger">Closed</span>]
          </h2>

          <div className="mess px-3 my-4">
            {/* <h4 className="text-info">Mess Tender</h4> */}
            <div className="details px-3 mt-4">
              <p className="muted-text">
                These tenders have been finalized as of Feb 2019:
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Cycle-tendering-document.pdf"
                    className="text-decoration-none"
                  >
                    Cycel Shop Tender Document
                  </a>
                </li>
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Canteen-Tender.pdf"
                    className="text-decoration-none"
                  >
                    Hostel Canteen Tender Document
                  </a>
                </li>
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Aromas-Delight-Tender-Document.pdft"
                    className="text-decoration-none"
                  >
                    Hostel Canteen Tender Document
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div className="mess px-3 my-4">
            <h4 className="text-info">Stationary Shop Tendering</h4>
            <div className="details px-3 mt-2">
              <p className="muted-text">
                We are in the process of selection of the vendor to operate the
                Stationery shop in the premise located in the academic area
                (Near SOM) of campus.
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Stationary_Shop_Tender.pdf"
                    className="text-decoration-none"
                  >
                    Stationary Shop Tender Document
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div className="mess px-3 my-4">
            <h4 className="text-info">Hostels Canteen Tendering</h4>
            <div className="details px-3 mt-2">
              <p className="muted-text">
                We are in the process of selection of catering contractors for
                the canteens in the Hostel-4 and Tansa house.
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Hostel_Canteen_Tender_2018.pdf"
                    className="text-decoration-none"
                  >
                    Hostel Canteen Tender
                  </a>
                </li>
              </p>
            </div>
          </div>

          <div className="mess px-3 my-4">
            <h4 className="text-info">Mess Tendering</h4>
            <div className="details px-3 mt-2">
              <p className="muted-text">
                We are in the process of selection of catering contractors for
                the mess in the Hostels : 2, 6, 10 and 12:13:14
                <li>
                  <a
                    href="https://gymkhana.iitb.ac.in/~hostels/contract/Hostel_Mess_Tender_2018.pdf"
                    className="text-decoration-none"
                  >
                    Hostel Mess Tender
                  </a>
                </li>
              </p>

              <p className="muted-text">
                these vendor has qualified the technical document scrunity.
              </p>

              <div className="list">
                <div className="list1 ">
                  <li>V. N. Caterers</li>
                  <li>Jaiswal Canteen (A)</li>
                  <li>Sanvi Star Hospitality Pvt Ltd</li>
                  <li>K Star Food {"&"} Hospitality Services</li>
                  <li>Super Care Catering Services Pvt Ltd</li>
                  <li>Cheftalk Food {"&"} Hospitality Services Pvt Ltd</li>
                  <li>Vidya Caterers</li>
                  <li>NDS Hospitality Services Pvt Ltd</li>
                  <li>Shree Chakra Gourmet Service</li>
                  <li>Kuber Healthfood {"&"} Allied Services Pvt Ltd</li>
                  <li>Nityachaitanya Hospitality Pvt Ltd</li>
                </div>

                <div className="list2 ">
                  <li>Sai Hospitality Services</li>
                  <li>Annapurna Catering Services</li>
                  <li>Vehar Canteen Services</li>
                  <li>Manjushree Caterers</li>
                  <li>Saikripa Foods Services Pvt Ltd</li>
                  <li>Venture Professional Hospitality Pvt Ltd</li>
                  <li>Subhash Caterers</li>
                  <li>Krystal Gourmet Pvt Ltd</li>
                  <li>Trinova Hospitality Services Pvt Ltd</li>
                  <li>Shree Annapurneshwari Allied Services Pvt Ltd</li>
                  <li>Kumar Food Management Services</li>
                </div>
              </div>

              <p className="muted-text">
                The commercial bid meeting is shifted to 25th June 4pm <br />
                Technical shortlist will be uploaded by 24th June in the evening
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Tenders;
