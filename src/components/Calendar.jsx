import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineDashboard, MdLogout } from "react-icons/md";
import { BsBrowserSafari } from "react-icons/bs";
import { FaList } from "react-icons/fa";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { FaRegCalendarAlt } from "react-icons/fa";

import "../styles/Calendar.css";


const events = [
  {
    title: "Google OA",
    date: "2026-07-29",
    color: "#F59E0B",
  },

  {
    title: "Amazon Interview",
    date: "2026-08-03",
    color: "#10B981",
  },

  {
    title: "Microsoft Offer",
    date: "2026-08-03",
    color: "#6366F1",
  },

  {
    title: "Adobe OA",
    date: "2026-08-05",
    color: "#EF4444",
  },
];

const Calendar = ({onNavigate}) => {
  return (
    <div className="Calender">
          <nav className="navbar">
           <div className="nav-left">
                       
                       
             <h2 className="logo"> 
               <span  className="logo-btn">
                     <FaBriefcase />
                </span> 
                    JobTracker
              </h2>
         
     <div className="nav-links">
           <h3 onClick={() => onNavigate("dashbaord")}>
                   <MdOutlineDashboard />
                  Dashboard
           </h3>
         

           <h3 onClick={() => onNavigate("browse")}> <BsBrowserSafari />Browse</h3>
            <h3 onClick={() => onNavigate("apps")}> <FaList />My Apps</h3> 
            <h3 className="active">
              <FaRegCalendarAlt />
              Calendar
            </h3>
         
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
         
     <button className="logout-btn" 
     onClick={() => onNavigate("login")}>
              <MdLogout />
     </button>
        </div>
         </nav>


    <section className="calendar-header">
    <p className="calendar-small-title">CALENDAR</p>
    <h1>Job Calendar</h1>

    <p className="calendar-subtitle">
       Track your application deadlines and stay on top of every 
       online assessment , interview and offer.
    </p>
    </section>  



    <section className="calendar-container">
      <div className="calendar-left">
         <FullCalendar 
          plugins={[dayGridPlugin , interactionPlugin]}
          initialView = "dayGridMonth"
          height= "650px"
          events={events}
          editable= {true}
          selectable= {true}
          dayMaxEvents= {true}
          />
      </div>

      <div className="calendar-right">
        <div className="info-card">
          <h3>
            Upcoming Deadlines
          </h3>

          <div className="deadline-item">
            <strong>Google OA</strong>
            <span>Tomorrow</span>
          </div>

          <div className="deadline-item">
              <strong>Amazon Interview</strong>
            <span>30 jul</span>
          </div>

           <div className="deadline-item">
                <strong> Microsoft Offer</strong>
            <span>3 Aug</span>
          </div>

        </div>

        <div className="info-card center-card">
          <h3>This Month</h3>
          <h1>5</h1>
          <p>Deadlines Tracked</p>
        </div>

        <div className="info-card">
          <h3>Recent Applications</h3>

          <div className="application-item">
            <strong>Google</strong>   
            <span>Applied 20 jul</span>
          </div>
       

            <div className="application-item">
               <strong>Amazon</strong>
            <span>Applied 24 jul</span>
          </div>


            <div className="application-item">
                <strong>Microsoft</strong> 
            <span>Applied 26 jul</span>
          </div>

        </div>
      </div>

    </section>
          

    </div>
  );
};

export default Calendar;
