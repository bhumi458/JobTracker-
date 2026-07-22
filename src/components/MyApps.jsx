import React from "react";
import "../styles/MyApps.css";

import { FaBriefcase } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import { FaArrowAltCircleUp } from "react-icons/fa";
import { GiPaperBagOpen } from "react-icons/gi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import { IoIosSearch } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MyApps = () => {

  const filters = [
    {
      title: "Applied",
      number: 0,
      icon: <FaArrowAltCircleUp />,
      border: "#b7d4ff",
      bg: "#eef5ff",
      color: "#2F80ED",
    },
    {
      title: "OA",
      number: 0,
      icon: <GiPaperBagOpen />,
      border: "#ffd59c",
      bg: "#fff5e8",
      color: "#E79C2D",
    },
    {
      title: "Interview",
      number: 0,
      icon: <FaMicrophoneLines />,
      border: "#d6b8ff",
      bg: "#f6efff",
      color: "#8E44AD",
    },
    {
      title: "Offer",
      number: 0,
      icon: <GiPartyPopper />,
      border: "#bff1d6",
      bg: "#ecfff5",
      color: "#27AE60",
    },
    {
      title: "Rejected",
      number: 0,
      icon: <RxCross1 />,
      border: "#ffc7c7",
      bg: "#fff1f1",
      color: "#E74C3C",
    },
  ];

  return (
    <div className="MyApps">

       

      <nav className="navbar">

        <div className="nav-left">

          <h2 className="logo">
            <span className="logo-btn">
              <FaBriefcase />
            </span>

            JobTracker
          </h2>

          <div className="nav-links">

            <h3>
              <MdOutlineDashboard />
              Dashboard
            </h3>

            <h3>
              <BsBrowserSafari />
              Browse
            </h3>

            <h3 className="active">
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

          <button className="logout-btn">
            <MdLogout />
          </button>

        </div>

      </nav>

       

      <section className="MyApps-header">

        <div className="header-left">

          <h4>TRACKER</h4>

          <h1>My Applications</h1>

          <p className="header-text">
            0 companies tracked
          </p>

        </div>
      </section>

       

      <section className="filters">

        <button className="filter-btn active-filter">
          All (0)
        </button>

        {filters.map((item, index) => (

          <button
            key={index}
            className="filter-btn"
            style={{
              border: `1px solid ${item.border}`,
            }}
          >

            <span
              className="filter-icon"
              style={{
                background: item.bg,
                color: item.color,
              }}
            >
              {item.icon}
            </span>

            {item.title} ({item.number})

          </button>

        ))}

      </section>

     

      <section className="empty-card">

        <div className="empty-content">

          <FaMagnifyingGlass className="empty-icon" />

          <h2>No applications found</h2>

        </div>

      </section>

    </div>
  );
};

export default MyApps;