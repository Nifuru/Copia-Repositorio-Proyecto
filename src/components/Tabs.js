// Tabs.js
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
        {React.Children.map(children, (child, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => changeTab(index)}
            >
              {child.props.label}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { active: activeTab === index })
        )}
      </div>
    </div>
  );
};

export default Tabs;
