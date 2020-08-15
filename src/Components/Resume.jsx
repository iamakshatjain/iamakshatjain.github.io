import React from "react";
import Data from "../data";
import { capitalize } from "../util";

const Resume = () => {
  const { resume, education, experience, skills } = Data;
  return (
    <section className="sub-page-page">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Resume</h2>
        </div>
        <div className="page-content">
          <div className="row">
            <div className="col-sm-12">
              <div className="block">
                {/* <!-- Education --> */}
                <div className="block-title">
                  <h3>Education</h3>
                </div>

                <div className="timeline">
                  {education.map(
                    ({
                      title,
                      startDate,
                      endDate,
                      organisation: { name: orgName, link: orgLink },
                      description,
                    }) => {
                      return (
                        <div className="timeline-item">
                          <h4 className="item-title">{title}</h4>
                          <span className="item-period">{`${startDate}-${endDate}`}</span>
                          <span className="item-small">
                            <a
                              href={orgLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {orgName}
                            </a>
                          </span>
                          {description &&
                            description.length > 0 &&
                            description.map((sentence) => (
                              <p className="item-description">
                                <span className="bullet">&bull;&nbsp;</span>
                                {sentence}
                              </p>
                            ))}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            {/* <!-- / Education --> */}

            <div className="col-sm-12">
              <div className="block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>

                {/* <!-- Experience--> */}
                <div className="timeline">
                  {experience.map(
                    ({
                      title,
                      startDate,
                      endDate,
                      organisation: { name: orgName, link: orgLink },
                      description,
                      skills,
                    }) => {
                      return (
                        <div className="timeline-item">
                          <h3 className="item-title">{title}</h3>
                          <span className="item-period">{`${startDate}-${endDate}`}</span>
                          <span className="item-small">
                            <a
                              href={orgLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {orgName}
                            </a>
                          </span>
                          {description &&
                            description.length > 0 &&
                            description.map((sentence) => (
                              <p className="item-description">
                                <span className="bullet">&bull;&nbsp;</span>
                                {sentence}
                              </p>
                            ))}
                          {skills && (
                            <>
                              <h6 className="skills-heading">
                                Key Skills/Technologies :
                              </h6>
                              <div className="skills-info">
                                {skills.map((skill) => {
                                  return (
                                    <h6>
                                      <span className="skill skill-small badge">
                                        {skill}
                                      </span>
                                    </h6>
                                  );
                                })}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Experience--> */}

          <div className="row">
            <div className="block">
              <div className="block-title">
                <h3>Skills</h3>
              </div>
              {/* <!-- subskills --> */}
              {Object.keys(skills).map((subskill) => {
                return (
                  <>
                    <div className="block-sub-title">
                      <h4>{capitalize(subskill)}</h4>
                    </div>

                    <div className="skills-info">
                      {skills[subskill].map((badge) => {
                        return (
                          <h4>
                            <span className="skill badge">{badge}</span>
                          </h4>
                        );
                      })}
                    </div>
                  </>
                );
              })}
              {/* <!-- subskills --> */}
            </div>
          </div>

          {/* <!-- Download Resume Button --> */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="block">
                <div className="center download-resume">
                  <a
                    href={resume}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
