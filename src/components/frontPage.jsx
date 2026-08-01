import React from 'react'
import { SiTicktick } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import "../styles/frontPage.css";

const FrontPage = ({ onNavigate }) => {
    //We will use map() to display every feature

     const features = [
         {
           icon: <SiTicktick />,
           text: "Applied to 12 Companies",
         },
    
         {
           icon: <SiTicktick />,
          text: "3 Interviews this week",
         },
    
         {
           icon: <SiTicktick />,
           text: "1 offer received",
         },
        ] ;

   const buttons = ["Log In" , "Sign Up"];

   //JSX starts from here 
   return (
       /*main section of the page*/

       <section className="front-page">
       {/*left panel*/}

        <div className="auth-container">

          <div className="left-panel">
          <header>
            <h2 className="header">
               <span  className="logo-btn">
                      <FaBriefcase />
               </span>

              JobTracker</h2>
          </header>

            <h1 className="hero-title">Your placement journey , tracked <span className="orange-text">beautifully</span></h1>

            <p className="description">From first application to fina offer - keep every company , 
               every round , every note in one place.
            </p>

            {/*features list*/}
             <ul className="feature-list">
              {features.map((feature , index) => (
                //key help react identify every list item
                <li key = {index} className="feature-item">
                     <span className="feature-icon">
                         {feature.icon}
                     </span>

                     <span>
                      {feature.text}
                     </span>
                </li>
              ))}
            </ul>
          

          <footer className="footer">
            <p>Made for campus placement grind
               <span className="footer-logo">
                    <LuBicepsFlexed />
                </span>
            </p>
          </footer>
           </div>
        



         
          {/*right panel*/}
           <div className="right-panel">
          <h1 className="welcome-title">Welcome Back.</h1>
          <p className="welcome-subtitle">Log in to your tracker.</p>

          <div className="button-group">
            {buttons.map((button , index) => { 
              return(
              <button key={index} className="tab-button">
                {button}
              </button>
              );
            })}
          </div>

          {/*login form */}

          <form
           className="login-form"
           onSubmit={(event) => {
           event.preventDefault();
           onNavigate("dashboard");
            }}
            >
            <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="email">Email</label>
              
              {/*email input box*/}
              <input 
               type="email"
               id="email"
               name="email"
               placeholder="Enter your email"/>
            </div>


             <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="password">Password</label>
              
              {/*password input box*/}
              <input 
               type="password"
               id="password"
               name="password"
               placeholder="Enter your password"/>
            </div>


             <p className="forgot-password">Forgot Password?</p>

             <button type="submit" className="login-btn">
              Log In
             </button>
          </form>


          <p className="signup-text">Don't have an account? <button
           type="button"
           className="signup-btn"
           onClick={() => onNavigate("signUp")}
           >
             Sign Up
          </button></p>
          </div>
        </div>
       </section>
   );
};

export default FrontPage
