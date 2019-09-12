import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './serviceItem.scss';

function ServiceItem({ icon, title }) {
  return (
    <div className="item">
      <div className="icon-container">
        <div className="service-item-icon">{icon}</div>
      </div>
      <div className="text-container">
        <span>{title}</span>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};

export default memo(ServiceItem);
