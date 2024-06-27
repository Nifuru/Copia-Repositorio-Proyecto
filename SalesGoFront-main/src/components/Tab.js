// Tab.js
import React from 'react';

const Tab = ({ label, children, active }) => (
  <div className={`tab-content ${active ? 'active' : 'inactive'}`}>
    {active && children}
  </div>
);

export default Tab;
