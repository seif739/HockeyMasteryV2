import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, children }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      {children}
    </div>
  );
};

export default Sidebar;
