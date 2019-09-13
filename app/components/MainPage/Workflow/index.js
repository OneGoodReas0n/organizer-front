import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FlowItem from './FlowItem';
import items from './data/items';
import './workflow.scss';

// SVGs
import ArrowsIcon from './assets/arrows.svg';
import HaveFunSVG from './assets/have-fun-ill.svg';

function Workflow() {
  return (
    <div className="workflow">
      <div className="start_container">
        <span className="main-text">
          <FormattedMessage {...messages.IntroText} />
        </span>
        <ArrowsIcon className="item_icon" />
      </div>
      {items.map(el => (
        <FlowItem
          key={el.id}
          id={el.id}
          title={el.title}
          description={el.description}
          picture={el.picture}
        />
      ))}
      <div className="start_container">
        <ArrowsIcon className="item_icon" />
        <span className="main-text mt-3">
          <FormattedMessage {...messages.HaveFunText} />
        </span>
        <HaveFunSVG className="item_illustration" />
      </div>
    </div>
  );
}

Workflow.propTypes = {};

export default memo(Workflow);
