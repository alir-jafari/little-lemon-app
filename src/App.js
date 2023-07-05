import React, { useState } from "react";
import { UserContext } from "./UserContext";
import './App.css';
import logo from './assets/images/logo.png';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Routing from "./components/Routing";



function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <UserContext.Provider value={{ user , setUser }} >
      <Header logo={logo} />
      <Routing />
      <Footer logo={logo} /> 
    </UserContext.Provider>
     
    </>
  );
}

export default App;
