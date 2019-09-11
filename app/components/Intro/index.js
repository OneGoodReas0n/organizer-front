import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
// SVGs
import Illustration from './assets/illustration.svg';

// Style
import './intro.scss';

import messages from './messages';
import Button from '../Button';

function Intro() {
  return (
    <div className="intro d-flex justify-between">
      <div className="text-block">
        <span className="main-text">
          <FormattedMessage {...messages.IntroBigText} />
        </span>
        <span className="secondary-text">
          <FormattedMessage {...messages.IntroContentText} />
        </span>
        <Button text={<FormattedMessage {...messages.IntroButtonText} />} />
      </div>
      <div className="picture-block">
        <Illustration />
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default memo(Intro);
