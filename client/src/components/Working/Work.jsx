import React from "react";
import "./Work.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar, FaCalendarAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const Work = () => {
  return (
    <section id="working">
      <div className="w-container">
        <p className="w-t">How It Works</p>
        <p className="w-p">
          Renting a car with us is as easy as cruising down the highway! Here's
          the lowdown:
        </p>
        <div className="w-d">
          <div className="s-c">
            <span className="ic">
              <FaCar />
            </span>
            <div className="h-t">
                <p>
                    Select Car
                </p>
            </div>
          </div>
          <div className="p-u">
            <span className="ic">
              <FaLocationDot />
            </span>
            <div className="h-t">
            <p>Choose pick up & drop off location</p>
            </div>
          </div>
          <div className="p-d">
            <span className="ic">
              <FaCalendarAlt />
            </span>
            <div className="h-t">
                <p>Choose pick up & drop off date</p>
            </div>
          </div>
          
          <div className="payment">
            <span className="ic">
              <RiSecurePaymentLine />
            </span>
            <div className="h-t">
                <p>Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
