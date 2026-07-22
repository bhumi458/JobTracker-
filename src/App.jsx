import React from 'react';
import FrontPage from "./components/frontPage";
import Dashboard from "./components/Dashboard";
import MyApps from "./components/MyApps";
import Browse from "./components/Browse";
 

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    return ["login", "dashboard", "browse" , "apps"].includes(hash)
    ? hash
    : "login";
  };

  const [opage , setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListenier("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);

  }, []);

  const navigate = (nextPage) => {
    window.location.hash = nextPage;
    setPage(nextPage);
  };

  if(page === "login") {
    return <FrontPage onNavigate={navigate} />;
  }

  if(page === "dashboard") {
    return <Dashboard onNavigate={navigate} />;
  }

  if(page === "browse") {
    return <Browse onNavigate={navigate} />;
  }

  return <MyApps onNavigate={navigate} />;
}
