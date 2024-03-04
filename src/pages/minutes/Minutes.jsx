import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Minutes() {
    Document.title = "Meeting Minutes | Hostel Affairs";

    const files = [
        { title: 'HGSC Meet 2', path: 'hostels/23-24/minutes/hgsc-2.pdf' },
        { title: 'HGSC Meet 3', path: 'hostels/23-24/minutes/hgsc-3.pdf' },
        { title: 'HGSC Meet 4', path: 'hostels/23-24/minutes/hgsc-4.pdf' },
        { title: 'Maintenance Committee Meet', path: 'hostels/23-24/minutes/maint-committee.pdf' },
        { title: 'Mess Committee Meet', path: 'hostels/23-24/minutes/mess-committee.pdf' },
    ];

    return (
        <div
            style={{
                backgroundImage: "url('./habg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100%",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            <Navbar />
            <div className="container text-white py-3 mt-4">
                <h1 className="text-warning text-center">Meeting Minutes</h1>{" "}
                <hr />
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                    {files.map((file, index) => (
                        <div key={index} className="col w3-animate-zoom shadow-lg shadow-sm">
                            <div className="h-100 overflow-hidden text-white rounded-4 shadow-lg">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <img src={"./iitb-logo.jpg"} className="rounded-3" alt="" />
                                    <h2 className="pb-2 mt-3 mb-2 display-6 lh-1 fw-bold">{file.title}</h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="d-flex align-items-center">
                                            <button className="btn btn-sm btn-primary">
                                                <a href={`${process.env.PUBLIC_URL}/${file.path}`} download>
                                                    Download
                                                </a>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Minutes;