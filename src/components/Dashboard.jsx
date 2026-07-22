import React from 'react'
import "../styles/Dashboard.css";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";
import { FaSignsPost } from "react-icons/fa6";
import { FaMicrophoneLines } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { GiPaperBagOpen } from "react-icons/gi";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Dashboard = () => {

    const stats = [
       {   
            logo: <FaArrowAltCircleUp />,
            number:0,
            title: "Applied",
            border:"#b7d4ff",
            bg: "#eef5ff",
            color:"#2F80ED"
       },

       {
            logo: <GiPaperBagOpen />,
            number:0,
            title: "OA",
            border:"#ffd59c",
            bg: "#fff5e8",
            color:"#E79C2D"
       },

       {     
            logo: <FaMicrophoneLines />,
            number:0,
            title: "Interview",
            border:"#d6b8ff",
            bg: "#f6efff",
            color:"#8E44AD"
       },

       {
            logo:<GiPartyPopper />,
            number:0,
            title: "Offer",
            border:"#bff1d6",
            bg: "#ecfff5", 
            color:"#27AE60"
       },

       {     
            logo: <RxCross1 />,
            number:0,
            title: "Rejected",
            border:"#ffc7c7",
            bg: "#fff1f1",
            color:"#E74C3C"
       },
    ];


  return (
    //main dashboard conatiner 
    <div className="dashboard">


        <nav className="navbar">
            <div className="nav-left">
               <h2 className="logo"> 
                <span  className="logo-btn">
                    <FaBriefcase />
                </span> 
                JobTracker
                </h2>

               <div className="nav-links">
                  <h3 className="active" onClick={() => onNavigate("dashbaord")}>
                    <MdOutlineDashboard />
                    Dashboard</h3>

                  <h3 onClick={() => onNavigate("browse")}> <BsBrowserSafari />Browse</h3>
                  <h3 onClick={() => onNavigate("apps")}> <FaList />My Apps</h3> 

               </div>
            </div>

           <div className="nav-right">
              <div className="profile">
                <div className="avatar">
                    E
                </div>
                <span>
                    Email Name
                </span>

              </div>

              <button className="logout-btn" onClick={() => onNavigate("login")}>
                     <MdLogout />
              </button>
           </div>
        </nav>

        {/*HEADER SECTION */}
       <section className="dashboard-header">
        <div className="header-left">
            <h4>DASHBOARD</h4>

            <h1>Hey , <span>Email Name</span></h1>

            <p className="header-text">
                Start your placement journey today
            </p>
             
        </div>

 

       </section>


    {/*STATISTICS CARDS*/}
       <section className="cards">
        {
            stats.map((stat,  index) => {
                return (
                <div key = {index} className="assessment-cards" style={{border: `1px solid ${stat.border}`}}>
                    <div className="card-icon"  
                       style={{
                        background:stat.bg,
                        color: stat.color,
                          }}>
                        {stat.logo}
                    </div>
                    <h2 style={{color:stat.color}}>{stat.number}</h2>
                    <p>{stat.title}</p>
                </div>
                );
            })
        }
       </section>

        {/*BOTTOM SECTION */}
        <section>
            <div className="bottom-section">
                <div className="recent">
                    <h2>TODAY'S TIP</h2>
                    <p>Start by browsing companies - 
                        click any company to see their full hiring process before you apply</p>
                </div>

                <div className="recent-next">
                    <h2>PLACEMENT SCORE</h2>
                     <div className="score-line"></div>
                    <h3>No data yet</h3>
                    <p>Start applying to see your score</p>
                </div>
            </div>
        </section>
    
    </div>
  );
};

export default Dashboard
