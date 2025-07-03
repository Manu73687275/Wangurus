import React, { useEffect } from 'react';
import './App.css';
import { Mainpage } from './Pages/MainPage';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   
      once: false,      
      mirror: true,     
    });

    AOS.refresh();      
  }, []);

  return (
    <div className="scroll-smooth overflow-x-hidden overflow-hidden w-full">
      <Mainpage />
    </div>
  );
}

export default App;
