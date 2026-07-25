import React, {useEffect , useState } from "react";
import FrontPage from "./components/frontPage";
import FrontPage2 from "./components/frontPage2";
import Dashboard from "./components/Dashboard";
import MyApps from "./components/MyApps";
import Browse from "./components/Browse";
 

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    return ["login", "signUp" ,"dashboard", "browse" , "apps"].includes(hash)
    ? hash
    : "login";
  };


  // While useState tracks and updates data inside a component to trigger user interface (UI) updates, useEffect synchronizes your component with external systems by executing side effects like data fetching or event listening. 
  const [page , setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);

  }, []);

  const navigate = (nextPage) => {
    window.location.hash = nextPage;
    setPage(nextPage);
  };

   
  if(page === "login") {
    return <FrontPage onNavigate={navigate} />;
  }

  if(page === "signUp"){
    return <FrontPage2 onNavigate={navigate} />
  }


  if(page === "dashboard") {
    return <Dashboard onNavigate={navigate} />;
  }

  if(page === "browse") {
    return <Browse onNavigate={navigate} />;
  }
         
    if(page === "apps"){
    return <MyApps onNavigate={navigate} />;
  }

  return <MyApps onNavigate={navigate} />;
}
