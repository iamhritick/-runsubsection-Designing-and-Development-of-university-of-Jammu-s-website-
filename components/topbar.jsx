import { Link } from "react-router-dom";
import "./topbar.css";
import React, { useState, useEffect } from "react";

const Topbar = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 10000);

    return () => clearInterval(sliderInterval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3 || 3);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };


  
  return (
    <>
      <div className="abc">
        {/* First div */}
        <div className="jobs">
          <span>Jobs</span>
          <span>Calendar</span>
          <span>Tenders</span>
          <span>Payment Gateway</span>
          <span>Recruiters/Careers</span>
          <span>IGES</span>
          <span>GIVE</span>
        </div>

        {/* Second div */}
        <div className="social">
          <ul>
            <li class="facebook">
              <a href="#">
                {" "}
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li class="linkedin">
              <a href="#">
                {" "}
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="twitter">
              <a href="#">
                {" "}
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li class="youtube">
              <a href="#">
                {" "}
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Third div */}
        <div className="lang">
          <span>हिन्दी</span>
          <span>/</span>
          <span>-</span>
          <span>+</span>
          <span>IITD Email</span>
        </div>
      </div>

      <div class="slider">
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`} />
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`} />
        <div className={`slide ${currentSlide === 3 ? "active" : ""}`} />
        <div className="slider-buttons">
          <button className="slider-button" onClick={() => setCurrentSlide(1)}>
            1
          </button>
          <button className="slider-button" onClick={() => setCurrentSlide(2)}>
            2
          </button>
          <button className="slider-button" onClick={() => setCurrentSlide(3)}>
            3
          </button>
        </div>

        <div class="overlay">
          <div className="image0">
            <Link to="https://www.g20.org/en/about-g20/" target="_blank">
              <img src="images/g20.png" alt="logo" />
            </Link>
          </div>

          <div className="image">
            <Link to="/Home">
              <img src="images/0logo.png" alt="logo" />
            </Link>
          </div>

          <div
            className="gif"
            style={{
              position: "relative",
              width: "52%",
              height: "150px",
              textAlign: "center",
              marginTop: "-11%",
            }}
          >
            <Link to="/Home">
              <img
                src="images/gif.gif"
                alt="logo"
                style={{
                  width: "400px",
                  height: "300%",
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  transform: "scaleX(1.5)",
                }}
              />
            </Link>
          </div>

          <div className="location-container">
            <p>
              <a href="https://www.google.com/maps/dir//University+Of+Jammu,+Baba+Saheb+Ambedkar+Road,+University+of+Jammu,+Gujarbasti,+Jammu,+Jammu+and+Kashmir+180006/@32.6788001,74.8905063,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x391e849955a0d7cf:0x1a5dc7b412505c64!2m2!1d74.868063!2d32.71937!3e0?entry=ttu">
                University of Jammu <br />
                Baba Saheb Ambedkar Road,
                <br />
                Jammu Tawi (J&K)-180006 (INDIA){" "}
              </a>
            </p>

            <div className="location">
              <img src="images/location.png" alt="logo" />
            </div>
          </div>
        </div>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item1">
              <Link to="/Home">
                <i
                  class="fa-solid fa-house-chimney"
                  style={{ color: "white" }}
                ></i>
              </Link>
            </li>

            <li className="navbar-item">
              Academic Affairs <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">University</div>
                    <ul>
                      <li>Vission & Mission</li>
                      <li>Chancellor</li>
                      <li>Vice Chancellor</li>
                      <li>Registrar</li>
                      <li>Controller of Examination</li>
                      <li>Administration</li>
                      <li>University Council</li>
                      <li>University Syndicate</li>
                      <li>University Academic Council</li>
                      <li>Deans of Various Faculties</li>
                      <li>Board of Studies</li>
                      <li>Minutes of Meeting</li>
                      <li>JUTA</li>
                      <li>NTEU-JU</li>
                      <li>Notification</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Academics</div>
                    <ul>
                      <li>Academics @ JU</li>
                      <li>Faculties</li>
                      <li>Centers & Cell</li>
                      <li>Distance Education</li>
                      <li>Constituent Colleges</li>
                      <li>Affiliated Colleges</li>
                      <li>MOM of Boards of Science</li>
                      <li>Offsite Campus</li>
                      <li>ABC Schemes</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Research</div>
                    <ul>
                      <li>Research @ JU</li>
                      <li>Resource Policy</li>
                      <li>Research Calender</li>
                      <li>Research Projects</li>
                      <li>Statutes MPHIL/PHD</li>
                      <li>PHD Admissions</li>
                      <li>List of PHD Scholors</li>
                      <li>Scholorships/Fellowships</li>
                      <li>MOUS</li>
                      <li>Notifications</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Student Corner</div>
                    <ul>
                      <li>Admission</li>
                      <li>Programs</li>
                      <li>Examinations</li>
                      <li>Online WIFI connection form</li>
                      <li>Results</li>
                      <li>Events</li>
                      <li>NSS</li>
                      <li>Scholorships</li>
                      <li>student's welfare</li>
                      <li>Statutes</li>
                      <li>Syllabus PG Downloads</li>
                      <li>Syllabus UG Downloads</li>
                      <li>Syllabus UG-NEP Downloads</li>
                      <li>Notifications</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item">
              Innovation & Development <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">Innovation & Skill Development</div>
                    <ul>
                      <li>National Innovation Startup Policy</li>
                      <li>Entreprenship & Skill Development</li>
                      <li>
                        {" "}
                        University Business Incubation & Innovation Center
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Quality Assurence</div>
                    <ul>
                      <li>Mission Statement</li>
                      <li>Objectives & Faculties</li>
                      <li>Acheivements/Activities</li>
                      <li>Vision</li>
                      <li>Quality Policy</li>
                      <li>NAAC Report</li>
                      <li>NAAC visit videos</li>
                      <li>Annoual Quality Assurence Report</li>
                      <li>CAS PBAS</li>
                      <li>Teacher Profile</li>
                      <li>Contact Us</li>
                      <li>SoP's for NAAC SSR</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Center Facilities</div>
                    <ul>
                      <li>Campus Map</li>
                      <li>
                        Centre for ITES&M
                        <li>Wifi Facility</li>
                        <li>Internet Facility</li>
                        <li>Function Activities</li>
                        <li>Achievements</li>
                        <li>Optical fiber</li>
                        <li>Campus Network</li>
                      </li>
                      <li>
                        Health & Sports
                        <li>Sports Facility</li>
                        <li>Health Center</li>
                        <li>Yoga Center</li>
                        <li>Gymnastics</li>
                      </li>

                      <li>University work department</li>
                      <li>Control department</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Facilities & Publication cell</div>
                    <ul>
                      <li>
                        Residential facilities
                        <li>Hostels</li>
                        <li>Guest House</li>
                        <li>Staff Quaters</li>
                      </li>
                      <li>Dhanvantri Library</li>
                      <li>University Auditorium</li>
                      <li>Conference/Seminar Room</li>
                      <li>
                        Other Facilities
                        <li>Canteen</li>
                        <li>Parking</li>
                        <li>Day core Center</li>
                        <li>Botanical/Cactus Garden</li>
                        <li>green House</li>
                        <li>Green Campus Took Form</li>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item1">
              Events & Engagements <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">Conference</div>
                    <ul>
                      <li>Present Conference</li>
                      <li>Upcoming Conference</li>
                      <li> Past Conference</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Media Gallery</div>
                    <ul>
                      <li>Photo Gallery</li>
                      <li>Press Release</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">Today's Order</div>
                  </div>

                  <div class="col">
                    <div class="p-3">Tender's</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item2">
              Administrative Updates <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">Jobs @ JU</div>
                    <ul>
                      <li>Teaching Staff</li>
                      <li>Non-Teaching Staff/Technical Staff</li>
                      <li>Interview Schedule List</li>
                      <li>Syllabus</li>
                      <li>Download Result/Answer Key</li>
                      <li>Download Admit Card for Junior Assistant</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">NEP</div>
                    <ul>
                      <li>Syllabus UG-NEP</li>
                      <li>Archieves</li>
                    </ul>
                  </div>

                  <div class="col">
                    <div class="p-3">JKSET/LASET</div>
                  </div>

                  <div class="col">
                    <div class="p-3">NIRF</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item3">
              Graduation Convocation <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">Special Convocation 2023</div>
                  </div>

                  <div class="col">
                    <div class="p-3">Vidyajali</div>
                  </div>

                  <div class="col">
                    <div class="p-3">Faculty Profile</div>
                  </div>

                  <div class="col">
                    <div class="p-3">Alumuni</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item4">
              Admission Information <i class="fa fa-angle-down"></i>
              <div class="container">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">International Students</div>
                  </div>

                  <div class="col">
                    <div class="p-3">PG Admission 2023</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="navbar-item">Contact Us</li>

            <li className="navbar-item search-icon">
              <a href="#">
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "white" }}
                ></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Topbar;
