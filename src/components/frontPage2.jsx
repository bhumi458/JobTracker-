import React from 'react'
import "../styles/frontPage2.css";

const FrontPage2 = ({onNavigate}) => {
    const features = [
      "Applied to 12 Companies",
      "3 Interviews this week ",
      "1 Offer received",
    ] ;

   //JSX starts from here 
   return (
       /*main section of the page*/

       <section className="front-page">
       {/*left panel*/}

        <div className="auth-container">

          <div className="left-panel">
          <header>
            <h2 className="header">JobTracker</h2>
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
                <li key = {index} className="feature-item">{feature}</li>
              ))}
            </ul>
          

          <footer className="footer">
            <p>Made for campus placement grind</p>
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

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
              />
            
            <label htmlFor="terms">
                I agree to the{" "}
                <span>Terms of Service</span> and{" "}
                <span>
                    Privacy Policy
                </span>
            </label>
            </div>

      

             <button type="submit" className="create-btn">
                  Create Account
             </button>
          </form>


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
