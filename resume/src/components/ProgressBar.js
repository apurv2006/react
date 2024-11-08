import React from 'react';
import ProgressBar from 'react-progress-bar';

const Progress = ({ title, value }) => (
  <div className="progress-container">
    <span>{title}</span>
    <ProgressBar completed={value} />
  </div>
);

export const ProgressBars = () => (
  <section id="progress">
    <h2>Project Progress</h2>
    <Progress title="Corporate Engagement Program" value={80} />
    <Progress title="React NGO Website" value={90} />
    {/* Add more progress bars as needed */}
  </section>
);

export default ProgressBars;
