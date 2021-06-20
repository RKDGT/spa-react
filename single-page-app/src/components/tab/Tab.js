import React, { useEffect } from "react";

import "./Tab.css";

function changePricing(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function Tab(args) {
  useEffect(() => {
    document.getElementById("default-tab").click();
  }, []);
  
  return (
    <div className="tab">
      <button
        id="default-tab"
        className="tablinks"
        onClick={(event) => {
          changePricing(event, "Monthly");
        }}
      >
        Monthly
      </button>
      <button
        className="tablinks"
        onClick={(event) => {
          changePricing(event, "Annually");
        }}
      >
        Annually
      </button>
    </div>
  );
}

export default Tab;
