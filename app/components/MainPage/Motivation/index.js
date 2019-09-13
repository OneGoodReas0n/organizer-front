import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import LeftDecoration from './assets/top.svg';
import RightDecoration from './assets/bot.svg';
import messages from './messages';
import './motivation.scss';
import Button from '../Button';
// SVGs

function Motivation() {
  return (
    <div className="motivation">
      <LeftDecoration className="left_decor" />
      <div className="content left">
        <span className="content-title">
          <FormattedMessage {...messages.MotivationTitle} />
        </span>
        <div className="d-flex justify-content-center">
          <Button
            text={<FormattedMessage {...messages.MotivationButtonText} />}
          />
        </div>
      </div>
      <RightDecoration className="right_decor" />
    </div>
  );
}

Motivation.propTypes = {};

export default memo(Motivation);
