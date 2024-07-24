import React from 'react'
import Footer from '../../components/footer/Footer'

import Navbar from '../../components/navbar/Navbar'
import "./allocation.css"


import qrCodeImage from '../../images/qr-freshie.jpeg'; // Update the path accordingly



function Allocation() {
    document.title = "Freshie | Hostel Allocation";

    return (
        <div className='bg-black' style={{ backgroundImage: "url(./habg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100%", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
            <Navbar />
            <div className="allocation-content">
                <h1 className="allocation-heading">Hostel Allocation</h1>
                <div className="qr-code-container">
                    <img src={qrCodeImage} alt="QR Code" className="qr-code" />
                </div>
                <p className="qr-description">Scan the QR code to get information about 1st year hostel allocation.</p>
                <a href="./freshie(24-25).pdf" className="pdf-link" target="_blank" rel="noopener noreferrer">
                    Download PDF
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Allocation