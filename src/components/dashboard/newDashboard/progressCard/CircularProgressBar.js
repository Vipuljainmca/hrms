import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgressBar({ percentage }) {
  // Calculate border color based on percentage
  const getColor = () => {
    if (percentage >= 80) {
      return '#2a9d8f'; // Light green
    }
    if (percentage >= 50) {
      return '#ffff66'; // Light yellow
    }
    return '#ff9999'; // Light red
  };

  return (
    <div style={{ width: 50, height: 50 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: { width: '100%' },
          path: { stroke: getColor(percentage) },
          text: { fill: '#000' },
        }}
      />
    </div>
  );
}

CircularProgressBar.propTypes = {
  percentage: PropTypes.number,
};
