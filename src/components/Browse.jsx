import React from "react";
import "../styles/Browse.css";

import { FaBriefcase } from "react-icons/fa";
import { MdOutlineDashboard, MdLogout } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbMathGreater } from "react-icons/tb";

const Browse = () => {

  const companies = [
    {
      letter: "G",
      name: "Google",
      salary: "₹1.8L/month",
      category: "FAANG",
      difficulty: "Hard",
      categoryColor: "orange",
      difficultyColor: "red"
    },
    {
      letter: "M",
      name: "Microsoft",
      salary: "₹45 LPA",
      category: "FAANG",
      difficulty: "Hard",
      categoryColor: "orange",
      difficultyColor: "red"
    },
    {
      letter: "A",
      name: "Amazon",
      salary: "₹38 LPA",
      category: "FAANG",
      difficulty: "Hard",
      categoryColor: "orange",
      difficultyColor: "red"
    },
    {
      letter: "F",
      name: "Flipkart",
      salary: "₹42 LPA",
      category: "Unicorn",
      difficulty: "Medium",
      categoryColor: "purple",
      difficultyColor: "yellow"
    },
    {
      letter: "R",
      name: "Razorpay",
      salary: "₹32 LPA",
      category: "Fintech",
      difficulty: "Medium",
      categoryColor: "blue",
      difficultyColor: "yellow"
    },
    {
      letter: "C",
      name: "Cred",
      salary: "₹35 LPA",
      category: "Fintech",
      difficulty: "Medium",
      categoryColor: "blue",
      difficultyColor: "yellow"
    },
    {
      letter: "P",
      name: "PhonePe",
      salary: "₹28 LPA",
      category: "Fintech",
      difficulty: "Medium",
      categoryColor: "blue",
      difficultyColor: "yellow"
    },
    {
      letter: "A",
      name: "Atlassian",
      salary: "₹40 LPA",
      category: "Global",
      difficulty: "Medium",
      categoryColor: "green",
      difficultyColor: "yellow"
    },
    {
      letter: "G",
      name: "Groww",
      salary: "₹28 LPA",
      category: "Fintech",
      difficulty: "Easy",
      categoryColor: "blue",
      difficultyColor: "green"
    },
    {
      letter: "Z",
      name: "Zepto",
      salary: "₹25 LPA",
      category: "D2C",
      difficulty: "Easy",
      categoryColor: "red",
      difficultyColor: "green"
    },
    {
      letter: "S",
      name: "Swiggy",
      salary: "₹30 LPA",
      category: "D2C",
      difficulty: "Medium",
      categoryColor: "red",
      difficultyColor: "yellow"
    },
    {
      letter: "M",
      name: "Meesho",
      salary: "₹26 LPA",
      category: "D2C",
      difficulty: "Easy",
      categoryColor: "red",
      difficultyColor: "green"
    }
  ];

  return (
    <div className="browse">

    

      <nav className="navbar">

        <div className="nav-left">

          <h2 className="logo">
            <span className="logo-btn">
              <FaBriefcase />
            </span>

            JobTracker
          </h2>

          <div className="nav-links">

            <h3 onClick={() => onNavigate("dashbaord")}>
              <MdOutlineDashboard />
              Dashboard
            </h3>

            <h3 className="active" onClick={() => onNavigate("browse")}>
              <BsBrowserSafari />
              Browse
            </h3>

            <h3 onClick={() => onNavigate("apps")}>
              <FaList />
              My Apps
            </h3>

          </div>

        </div>

        <div className="nav-right">

          <div className="profile">

            <div className="avatar">
              E
            </div>

            <span>Email Name</span>

          </div>

          <button className="logout-btn" onClick={() => onNavigate("login")}>
            <MdLogout />
          </button>

        </div>

      </nav>

       

      <section className="browse-header">

        <div className="header-left">

          <h4>BROWSE</h4>

          <h1>Top Companies</h1>

          <p className="header-text">
            Pick a company and log your application instantly
          </p>

        </div>

        <button className="add-btn">
          + Add Applications
        </button>

      </section>

       

      <section className="search">

        <IoIosSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Companies..."
          className="search-input"
        />

      </section>

    

      <section className="bottom-section">

        <div className="company-section">

          {companies.map((company, index) => (

            <div className="company-card" key={index}>

              <div className="company-logo">
                {company.letter}
              </div>

              <h3>{company.name}</h3>

              <p className="salary">
                {company.salary}
              </p>

              <div className="tags">

                <span className={`tag ${company.categoryColor}`}>
                  {company.category}
                </span>

                <span className={`tag ${company.difficultyColor}`}>
                  {company.difficulty}
                </span>

              </div>

              <button className="view-btn">

                View process

                <TbMathGreater />

              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Browse;
