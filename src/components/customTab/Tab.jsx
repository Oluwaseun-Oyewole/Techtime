import React, { useState } from "react";
export const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div>
        <div className="flex items-center justify-between md:justify-center gap-5 lg:gap-20 satoshi ">
          {tabs?.map((tab, index) => {
            return (
              <ul className="nav" key={index}>
                <li
                  className={`cursor-pointer text-xs md:text-base text-body font-black pt-3 pb-3 md:pl-5 md:pr-5 ${
                    activeTab === index ? "actives" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="pt-5 ">
        {tabs?.map((tab, index) => {
          return (
            <div key={index}>{activeTab === index && tab.component()}</div>
          );
        })}
      </div>
    </>
  );
};
