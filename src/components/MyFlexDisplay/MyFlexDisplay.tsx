import React from 'react';
import './MyFlexDisplay.css';

const MyFlexDisplay: React.FC = () => (
  <div className="my-flex-display">
    <div className="big-flex">Big flex statement</div>
    <div className="small-flex">Small flex statement</div>
    <div className="small-flex">Another small flex statement</div>
  </div>
);

export default MyFlexDisplay;