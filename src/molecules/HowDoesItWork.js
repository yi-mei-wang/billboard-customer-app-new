import React from 'react';
import { Underline } from '../atoms';
import { ReactComponent as AISvg } from "../images/ai.svg";
import { ReactComponent as ConfirmedOrderSvg } from "../images/confirmed_order.svg";
import { ReactComponent as MobileSvg } from "../images/mobile.svg";
import { ReactComponent as UploadingSvg } from "../images/uploading.svg";


const HowDoesItWork = () => (
  <>
    <div style={{ "backgroundColor": "#fefefe" }} className="px-4 py-2">
      <h4>How does it work?</h4>
      <Underline style={{ "width": "100px", "backgroundColor": "#38a9ff" }} />
    </div>
    <div className="mx-3">
      <div className="mb-5">
        <h5>1. Upload your images anywhere</h5>
        <UploadingSvg />
        <div className="p-2">
          <p>Not in your office and do not have access to your laptop? Fret not! Use our mobile-friendly app to advertise on-the-go.</p>
          <p>Our app works on laptop as well, of course.</p>
        </div>
      </div>
      <div className="py-3">
        <h5>2. Let our AI do its job</h5>
        <AISvg />
        <p>We use artificial intelligence to moderate the content to ensure short turnaround time.</p>
      </div>
    </div>

  </>
)


export default HowDoesItWork;