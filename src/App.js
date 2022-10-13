import logo from "./logo.svg";
import Navb from "./components/Nav";
import { Home } from "./components/home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Testmonials from "./components/testimonials/Testmonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home2 from "./components/home/Home2";
import Ex from "./components/ex";
import { Nav } from "./components/Navbar/Nav";
import Tabs from "./components/Tbas";
import { useState } from "react";
import Portfolio2 from "./components/portfolio/Portfolio2";
import Porto from "./components/portfolio/porto";
import Port from "./components/portfolio/Port";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
function App() {
  const [classM, setClass] = useState("nav-menu");
  const [active, setActive] = useState("active");
  const [toggleState, setToggleState] = useState(1);
  const [proj, setProj] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setClass("nav-menu");
    setProj(0);
  };

  const projet = () => {
    setProj(1);
  };

  return (
    <>
      <BrowserRouter>
        <header className="header">
          <div className="container1">
            <div className="row">
              <div className="logo">
                <Link to="/">Y</Link>
              </div>
              <div
                className="hamburger-btn outer-shadow hover-in-shadow"
                onClick={() => setClass("nav-menu open")}
              >
                <span></span>
              </div>
            </div>
          </div>
        </header>

        {/* --------------------Nav menu-------------- */}
        <nav className={classM}>
          <div
            className="close-nav-menu outer-shadow hover-in-shadow"
            onClick={() => setClass("nav-menu")}
          >
            &times;
          </div>
          <div className="nav-menu-inner">
            <ul>
              <li>
                <Link
                  to="/"
                  className={
                    toggleState === 1
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    toggleState === 2
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(2)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={
                    toggleState === 3
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(3)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={
                    toggleState === 4
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(4)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={
                    toggleState === 5
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => {
                    toggleTab(5);
                    projet();
                  }}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={
                    toggleState === 6
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(6)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    toggleState === 7
                      ? "link-item inner-shadow active"
                      : "tlink-item outer-shadow hover-in-shadow"
                  }
                  onClick={() => toggleTab(7)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* ------------copyright text ---------*/}
          <p className="copyright-text">&copy; 2022 the WEBshale</p>
        </nav>
        {/* ------------Navigation menu end---------*/}
        {/*  <Sidebar />
      <main className="main">    </main> 
*/}
        <Routes>
          <Route path="/" element={<Home2 toggleState={toggleState} />} />
          <Route path="/about" element={<About toggleState={toggleState} />} />
          <Route
            path="/services"
            element={<Services toggleState={toggleState} />}
          />
          <Route
            path="/resume"
            element={<Resume toggleState={toggleState} />}
          />
          <Route
            path="/contact"
            element={<Contact toggleState={toggleState} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio toggleState={toggleState} proj={proj} />}
          />

          {/*<Pricing toggleState={toggleState} /> 
      {/*<Testmonials toggleState={toggleState} />*/}
          {/*<Blog toggleState={toggleState} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
