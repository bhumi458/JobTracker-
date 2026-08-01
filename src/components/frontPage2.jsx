import React from 'react'
import { SiTicktick } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import "../styles/frontPage2.css";

const FrontPage2 = ({onNavigate}) => {
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

            <h1 className="hero-title">Your placement journey ,<br />
             tracked <span className="orange-text">beautifully</span></h1>

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
            <div className="signup-box">
      
          <h1 className="welcome-title">Create account</h1>

          <p className="welcome-subtitle">
            Create your jobTracker account.
          </p>

          {/*login form */}

          <form
             className="Signup-form"
             onSubmit={(event) => {
             event.preventDefault();
             onNavigate("login");
            }}
            >

            <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="fullname">Full name</label>
              
              {/*email input box*/}
              <input 
               type="text"
               id="fullname"
               name="fullname"
               placeholder="Enter your full name"/>

            </div>

             <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="username">Username</label>
              
              {/*email input box*/}
              <input 
               type="text"
               id="username"
               name="username"
               placeholder="Enter your Username"/>
            </div>

             <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="email">Email address</label>
              
              {/*email input box*/}
              <input 
               type="email"
               id="email"
               name="email"
               placeholder="Enter your Email adddress"/>
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


            <div className="form-group">
              {/*connect label with inout*/}
              <label htmlFor="confirmpassword">Confirm password</label>
              
              {/*password input box*/}
              <input 
               type="password"
               id="Confirmpassword"
               name="Confirmpassword"
               placeholder="Confirm your password"/>
            </div>
          </form>


           <div className="terms">
              <input className="checkBox"
                type="checkbox"
                id="terms"
              />
            
            <label htmlFor="terms">
                I agree to the{" "}
                <span className="S1">Terms of Service</span> and{" "}
                <span className="S2">
                    Privacy Policy
                </span>
            </label>
            </div>

    
             <button type="submit" className="create-btn" onClick={() => onNavigate("login")}>
                  Create Account
             </button>


          <p className="signup-text">Already have an account?{" "}
            <button type="button"
            className="login-link"
            onClick={() => onNavigate("login")}
            >
             Log in
          </button>
          </p>
          </div>
        </div>
        </div>
       </section>
   );
}

export default FrontPage2;
