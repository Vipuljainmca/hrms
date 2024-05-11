import React from 'react';
import PropTypes from 'prop-types';

export default function LinerGraph({ item }) {
  return (
    <div>
      <div className="line-graph-title">
        <p className="line-graph-content">{item.title}</p>
        <p className="line-graph-content">{item.number}</p>
      </div>
      <div
        className="progress progress-striped active"
        style={{
          backgroundColor: 'grey',
          height: '3.5px',
          borderRadius: 'none',
          marginBottom: '10px',
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${item.percentage}%`,
            backgroundColor: item.color,
          }}
        />
      </div>
    </div>
  );
}

LinerGraph.propTypes = {
  item: PropTypes.object,
};
