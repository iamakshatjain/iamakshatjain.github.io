import React, { PureComponent, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Assets/Styles/index.css";

// sub pages components
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

class App extends PureComponent {
  state = { isNavVisible: false };
  prevScroll = window.pageYOffset;
  siteHeader = React.createRef();

  componentDidMount = () => {
    this.prevScroll = window.pageYOffset;
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    // 992px is break point for mobile view
    const isMobileView = window.innerWidth < 992;
    if (isMobileView) return;

    const currScroll = window.pageYOffset;
    if (this.prevScroll > currScroll) {
      // while moving up
      this.siteHeader.current.style.top = "0";
      this.siteHeader.current.style.background = "white";
    } else {
      // while moving down
      this.siteHeader.current.style.top = "-100px";
    }

    this.prevScroll = currScroll;
  };

  render() {
    const { isNavVisible } = this.state;

    return (
      <Fragment>
        <Router>
          {/* site header */}
          <div id="page" className="page">
            <header
              id="site_header"
              className={`header ${!isNavVisible ? "mobile-menu-hide" : ""}`}
              ref={this.siteHeader}
            >
              <div className="header-content">
                <Link to="/">
                  <div className="site-title-block mobile-hidden">
                    <div className="site-title">
                      Akshat <span>Jain</span>
                    </div>
                  </div>
                </Link>

                {/* <!-- Navigation --> */}
                <div className="navbar">
                  {/* <!-- Main menu --> */}
                  <ul id="nav" className="site-main-menu">
                    <li
                      onClick={() => {
                        this.setState({ isNavVisible: false });
                      }}
                    >
                      <Link className="pt-trigger" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        this.setState({ isNavVisible: false });
                      }}
                    >
                      <Link className="pt-trigger" to="/resume">
                        Resume
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        this.setState({ isNavVisible: false });
                      }}
                    >
                      <Link className="pt-trigger" to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        this.setState({ isNavVisible: false });
                      }}
                    >
                      <Link className="pt-trigger" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- /Main menu --> */}
                </div>
                {/* <!-- Navigation --> */}
              </div>
            </header>
            {/* <!-- /Header --> */}

            {/* <!-- Mobile Header --> */}
            <div className="mobile-header mobile-visible">
              <Link to="/">
                <div className="mobile-logo-container">
                  <div className="mobile-site-title">Akshat Jain</div>
                </div>
              </Link>

              <div
                className="menu-toggle mobile-visible"
                onClick={() => {
                  this.setState({ isNavVisible: !isNavVisible });
                }}
              >
                <i className="fa fa-bars" />
              </div>
            </div>
            {/* <!-- /Mobile Header --> */}

            {/* <!-- Main Content --> */}
            <div
              id="main"
              className="site-main"
              style={{ filter: isNavVisible ? "blur(4px)" : "blur(0px)" }}
              onClick={() => {
                if (isNavVisible) this.setState({ isNavVisible: false });
              }}
            >
              {/* <!-- Page changer wrapper --> */}
              <div className="pt-wrapper">
                {/* <!-- Subpages --> */}
                <div className="subpages">
                  <Switch>
                    <Route exact path="/resume">
                      <Resume />
                    </Route>
                    <Route exact path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route exact path="/contact">
                      <Contact />
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </div>
              {/* <!-- /Page changer wrapper --> */}
            </div>
            {/* <!-- /Main Content --> */}
          </div>
          <a
            href="https://www.linkedin.com/in/iamakshtjain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <footer className="footer">
              <div className="creater">
                Made with&nbsp;
                <span role="img" aria-label="heart-emoji">
                  ❤️
                </span>
                &nbsp; by Akshat Jain
              </div>
            </footer>
          </a>
        </Router>
      </Fragment>
    );
  }
}

export default App;
