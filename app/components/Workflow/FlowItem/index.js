import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './flowItem.scss';
import PathIcon from '../assets/path-el.svg';

const oddParts = (picture, title, description) => (
  <div className="flow-item-container">
    <div className="picture_place">{picture}</div>
    <div className="step-line">{<PathIcon className="item_icon" />}</div>
    <div className="text-block">
      <div className="title-block">
        <span className="title">{title}</span>
      </div>
      <div className="description-block">
        <span className="description">{description}</span>
      </div>
    </div>
  </div>
);

const evenParts = (picture, title, description) => (
  <div className="grey_bg flow-item">
    <div className="flow-item-container">
      <div className="text-block">
        <div className="title-block">
          <span className="title">{title}</span>
        </div>
        <div className="description-block">
          <span className="description">{description}</span>
        </div>
      </div>
      <div className="step-line">{<PathIcon className="item_icon" />}</div>
      <div className="picture_place">{picture}</div>
    </div>
  </div>
);

function FlowItem({ id, picture, title, description }) {
  return id % 2 === 0 ? (
    <div className="flow-item">{oddParts(picture, title, description)}</div>
  ) : (
    <div className="flow-item">{evenParts(picture, title, description)}</div>
  );
}

FlowItem.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};

export default memo(FlowItem);
