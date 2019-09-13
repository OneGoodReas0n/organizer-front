import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './info-item.scss';
import AccountIcon from './assets/account_icon.svg';

function InfoItem({ title }) {
  return (
    <div className="info-block">
      <div className="block-container">
        <AccountIcon className="info-icon" />
        <span className="info-text">{title}</span>
      </div>
    </div>
  );
}

InfoItem.propTypes = {
  title: PropTypes.any.isRequired,
};

export default memo(InfoItem);
