import React from 'react';
import PropTypes from 'prop-types';

import CircularProgressBar from './CircularProgressBar';
import './ProgressCard.css';

export default function ProgressCard({ percentage, status, count }) {
  return (
    <div className="card circular-card rounded-3 shadow-sm">
      <div>
        <CircularProgressBar percentage={percentage} />
      </div>
      <div>
        <span>{status}</span>
      </div>
      <div>{count}</div>
    </div>
  );
}

ProgressCard.propTypes = {
  percentage: PropTypes.number,
  status: PropTypes.string,
  count: PropTypes.number,
};
