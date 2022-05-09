import React from "react";
import "./MacBookPro161.css";

function MacBookPro161(props) {
  const { group1, group2, hansoBank, component1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="macbook-pro-16-1 screen">
        <img className="group" src={group1} />
        <div className="flex-col">
          <img className="group-1" src={group2} />
          <img className="hanso-bank" src={hansoBank} />
        </div>
        <img className="component-1" src={component1} />
      </div>
    </div>
  );
}

export default MacBookPro161;
