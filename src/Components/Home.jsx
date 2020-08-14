import React from "react";
import Data from "../data";

const Home = () => {
  const {
    name,
    title,
    photo,
    links: { linkedIn, twitter, github, stackOverflow },
    aboutMe: { description, location, email, phone, freelance },
    resume,
    vCard,
  } = Data;
  return (
    <div className="sub-page-page">
      <div className="section-inner start-page-content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="photo">
                <img src={photo} alt="my_photo" />
              </div>
            </div>

            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="title-block">
                <h1>{name}</h1>
                <div className="sp-subtitle">{title}</div>
              </div>

              <div className="social-links">
                {linkedIn && (
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                )}
                {twitter && (
                  <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                )}
                {stackOverflow && (
                  <a
                    href={stackOverflow}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-stack-overflow"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="row">
            <div className="col-md-6 info">
              <div className="about-me">
                <div className="block-title">
                  <h3>
                    About <span>Me</span>
                  </h3>
                </div>
                {/* compulsory field */}
                <p>{description}</p>
              </div>
              <div className="download-resume">
                {/* TODO : apply downloading here */}
                <a
                  href={resume}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
              <div className="download-card">
                <a
                  href={vCard}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download V-Card
                </a>
              </div>
            </div>

            <div className="col-md-6 info">
              <ul className="info-list">
                {location && (
                  <li>
                    <span className="title">Location</span>
                    <span className="value">{location}</span>
                  </li>
                )}
                {email && (
                  <li>
                    <span className="title">E-mail</span>
                    <span className="value">
                      <a href={`mailto:${email}`}>{email}</a>
                    </span>
                  </li>
                )}
                {phone && (
                  <li>
                    <span className="title">Phone</span>
                    <span className="value">
                      <a href={`telto:${phone}`}>{phone}</a>
                    </span>
                  </li>
                )}
                {freelance && (
                  <li>
                    <span className="title">Freelance</span>
                    <span className="value available">{freelance}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
