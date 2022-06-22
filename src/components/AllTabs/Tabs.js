import React, { useState } from "react";
import "./Tabs.css";
import FirstTab from "../AllTabs/tabs/Tab1";
import SecondTab from "../AllTabs/tabs/Tab2";
import ThirdTab from "../AllTabs/tabs/Tab3";

function Tabs() {
  // const [activeTab, setActiveTab] = useState("tab1");
  // const [activeTabColor, setActiveTabColor] = useState(false);

  // const HandleFirstTab = () => {
  //   setActiveTab("tab1");
  //   setActiveTabColor(true);
  // };

  // const HandleSecondTab = () => {
  //   setActiveTab("tab2");
  //   setActiveTabColor(true);
  // };

  // const HandleThirdTab = () => {
  //   setActiveTab("tab3");
  //   setActiveTabColor(true);
  // };

  return (
    <div className="">
      {/* Tab nav */}

      <div className="tabs">
        {/* <section className="nav d-flex justify-content-between mb-2 Tab-titles">
          <div
            className={
              activeTabColor && activeTab === "tab1" ? "TabsActive" : ""
            }
            onClick={HandleFirstTab}
          >
            Phrase
          </div>
          <div
            className={
              activeTabColor && activeTab === "tab2" ? "TabsActive" : ""
            }
            onClick={HandleSecondTab}
          >
            Keystore JSON
          </div>
          <div
            className={
              activeTabColor && activeTab === "tab3" ? "TabsActive" : ""
            }
            onClick={HandleThirdTab}
          >
            Private Key
          </div>
        </section> */}
      </div>
      <div className="outlet">
        <FirstTab />
      </div>
    </div>
  );
}

export default Tabs;
