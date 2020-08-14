import React from "react";
import Data from "../data";

const Contact = () => {
  const {
    aboutMe: { location, email, phone, freelance },
  } = Data;
  return (
    <section className="sub-page-page">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Contact</h2>
        </div>
        <div className="page-content">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="block-title">
                <h3>
                  Get in <span>Touch</span>
                </h3>
              </div>
              {location && (
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="ci-text">
                    <h6>{location}</h6>
                  </div>
                </div>
              )}
              {email && (
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="ci-text">
                    <h6>
                      <a href={`mailto:${email}`}>{email}</a>
                    </h6>
                  </div>
                </div>
              )}
              {phone && (
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h6>
                      <a href={`telto:${phone}`}>{phone}</a>
                    </h6>
                  </div>
                </div>
              )}
              {freelance && (
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="ci-text">
                    <h6>Freelance {freelance}</h6>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
