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
        case "Tab 1":
            return <p>Tab 1.</p>;
        case "Tab 2":
            return <p>Tab 2.</p>;
        case "Tab 3":
            return <p>Tab 3.</p>;
        case "Tab 4":
            return <p>Tab 4.</p>;
        case "Tab 5":
            return <p>Tab 5.</p>;
        case "Tab 6":
            return <p>Tab 6.</p>;
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
        {["Tab 1", "Tab 2", "Tab 3","Tab 4","Tab 5","Tab 6"].map((tab) => (
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
