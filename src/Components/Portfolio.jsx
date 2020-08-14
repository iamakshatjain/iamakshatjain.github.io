import React, { useState } from "react";
import Data from "../data";
import { capitalize } from "../util";
const dummyThumbnail =
  "https://hackernoon.com/hn-images/1*raWO3dhM4jMjf9VY-kZzNg.png";
const Portfolio = () => {
  const { portfolio } = Data;
  const tabs = Object.keys(portfolio);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className="sub-page-page">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Portfolio</h2>
        </div>
        <div className="page-content">
          {/* <!-- Portfolio Content --> */}
          <div className="portfolio-content">
            {/* <!-- Portfolio filter --> */}
            <ul id="portfolio_filters" className="portfolio-filters">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={index === activeTabIndex ? "active" : ""}
                  onClick={() => {
                    if (activeTabIndex !== index) setActiveTabIndex(index);
                  }}
                >
                  <div className="filter btn btn-sm btn-link" data-group="all">
                    {capitalize(tab)}
                  </div>
                </li>
              ))}
            </ul>
            {/* <!-- End of Portfolio filter --> */}

            {/* <!-- Portfolio Grid --> */}
            <div id="portfolio-items">
              {portfolio[tabs[activeTabIndex]].map(
                ({ title, link, thumbnail, description }, index) => (
                  // Portfolio Item
                  <div className="portfolio-item" key={index}>
                    <a
                      className="portfolio-item-link"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="portfolio-item-image-wrapper">
                        <img
                          className="portfolio-item-image"
                          src={thumbnail || dummyThumbnail}
                          alt="item_thumbnail"
                        />
                      </div>
                      <div className="portfolio-item-desc">
                        <h5 className="portfolio-item-heading">{title}</h5>
                        <h6 className="portfolio-item-caption">
                          {description}
                        </h6>
                      </div>
                    </a>
                  </div>
                )
              )}
            </div>
            {/* <!-- /Portfolio --> */}
          </div>
          {/* <!-- /Portfolio Content --> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
