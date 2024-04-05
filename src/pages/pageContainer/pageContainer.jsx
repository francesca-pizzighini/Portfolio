import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";

import ToggleLanguage from "../../components/toggleLanguage/toggleLanguage";
import { useState } from "react";
import "./pageContainer.scss";

function PageContainer() {
  const [isEnglish, setIsEnglish] = useState(() => {
    const savedIsEnglish = localStorage.getItem("isEnglish");
    return savedIsEnglish ? JSON.parse(savedIsEnglish) : false;
  });

  function toggleLanguage() {
    const newIsEnglish = !isEnglish;
    setIsEnglish(newIsEnglish);
    localStorage.setItem("isEnglish", JSON.stringify(newIsEnglish));
  }

  return (
    <div>
      <div className={`inside ${isEnglish ? "english" : ""}`}>
        <div className="figure-one"></div>
        <div className="figure-two"></div>
        <div className="figure-three"></div>

        <div className="container">
          <Header />
          <Navbar isEnglish={isEnglish} />

          <ToggleLanguage toggleLanguage={toggleLanguage} />
          <div className="outlet">
            <Outlet context={isEnglish} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
