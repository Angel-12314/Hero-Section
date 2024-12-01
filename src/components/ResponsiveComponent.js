import "./../styles/ResponsiveComponent.css";
import React, { useState } from "react";

const ResponsiveComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
        case "Most Common Search's":
            return <p>Most Common Search's</p>;
        case "Dialysis":
            return <p>Dialysis</p>;
        case "Lung Cancer":
            return <p>Lung Cancer</p>;
        case "Ovarian Cyst":
            return <p>Ovarian Cyst</p>;
        case "Bypass Surgery":
            return <p>Bypass Surgery</p>;
        case "Knee Replacement":
            return <p>Knee Replacement</p>;
        case "Cardiac Bypass":
            return <p>Cardiac Bypass</p>;
      default:
        return <p>Select a tab to see its content.</p>;
    }
  };

  return (
    <div className="container">

      <div className="flex-container">
        {/* First Flex Box */}
        <div className="flex-box box-one">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/embryo-freezing-3589593-3052354.png" alt="Girl in a jacket" width="250" height="250"/>  
          <p>Freezing Egg</p>
        </div>

        {/* Second Flex Box */}
        <div className="flex-box box-two">
          <h2 style={{color: "blue"}}>How Can We Help You?</h2>
          <br/>
          <ul>
            <li>Easily Submit Your Medical Procedure Request</li>
            <li>Get call from our Doctor Assistance or from our Dedicated Medical Team</li>
            <li>Seamlessly Book Appoinments with Leading Doctors</li>
            <li>Receive Full Support Throughout Your Medical Journey</li>
          </ul>
          <br/>
          <button className="action-button">What is Egg Freezing {'>'}</button>
        </div>
      </div>
      <br/>
       {/* Search Bar */}
      <div className="search-bar-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <br/>
       {/* Tab Selection Row */}
      <div className="tabs-container">
        {["Most Common Search's", "Dialysis", "Lung Cancer","Ovarian Cyst","Bypass Surgery","Knee Replacement","Cardiac Bypass"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ResponsiveComponent;
