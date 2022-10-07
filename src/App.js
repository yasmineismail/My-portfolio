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
      <header className="header">
        <div className="container1">
          <div className="row">
            <div className="logo">
              <a href="index.html">Y</a>
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
              <a
                href="#home"
                className={
                  toggleState === 1
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(1)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  toggleState === 2
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(2)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={
                  toggleState === 3
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(3)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={
                  toggleState === 4
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(4)}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#work"
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
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className={
                  toggleState === 6
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(6)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={
                  toggleState === 7
                    ? "link-item inner-shadow active"
                    : "tlink-item outer-shadow hover-in-shadow"
                }
                onClick={() => toggleTab(7)}
              >
                Contact
              </a>
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

      <Home2 toggleState={toggleState} />
      <About toggleState={toggleState} />
      <Services toggleState={toggleState} />
      <Resume toggleState={toggleState} />
      {/*<Pricing toggleState={toggleState} /> 
      {/*<Testmonials toggleState={toggleState} />*/}
      {/*<Blog toggleState={toggleState} />*/}
      <Contact toggleState={toggleState} />
      <Portfolio toggleState={toggleState} proj={proj} />
    </>
  );
}

export default App;
