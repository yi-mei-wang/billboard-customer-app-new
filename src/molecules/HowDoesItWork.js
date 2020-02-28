import React from 'react';
import { Underline } from '../atoms';
import CallToAction from "../atoms/CallToAction";
import { ReactComponent as AISvg } from "../images/ai.svg";
import { ReactComponent as ConfirmedOrderSvg } from "../images/confirmed_order.svg";
import { ReactComponent as UploadingSvg } from "../images/uploading.svg";



const HowDoesItWork = ({ history }) => (
  <>
    <div style={{ "backgroundColor": "#fefefe" }} className="mx-4 my-2 p-2 pb-4 how-does-it-work">
      <h4>How does it work?</h4>
      <Underline style={{ "width": "100px", "backgroundColor": "#38a9ff" }} />

      <div className="mx-3">
        <div className="mb-5">
          <h5>1. Upload your images anywhere</h5>
          <UploadingSvg />
          <div className="p-2">
            <p className="mt-2">Not in your office and do not have access to your laptop? Fret not! Use our mobile-friendly app to advertise on-the-go.</p>
            <p>Our app works on laptop as well, of course.</p>
          </div>
        </div>
        <div className="py-3">
          <h5>2. Let our AI do its job</h5>
          <AISvg />
          <p className="mt-2">We use artificial intelligence to moderate the content to ensure short turnaround time.</p>
        </div>
        <div className="py-3">
          <h5>3. Find out if your ads are approved immediately</h5>
          <ConfirmedOrderSvg />
          <p className="mt-2">Receive confirmation in as little as 15 seconds. If your ad passes our moderation, it will be sent for display on our billboards.</p>
        </div>
      </div>
      <div style={{ "width": "100%", "display": "flex", "justifyContent": "center" }}>
        <CallToAction history={history} />
      </div>

    </div>
  </>
)


export default HowDoesItWork;