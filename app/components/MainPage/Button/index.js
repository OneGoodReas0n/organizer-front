import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './button.scss';
import { Link } from 'react-router-dom';

function Button({ text, className = '', small = false }) {
  return (
    <Link to="/login">
      <span className={`button ${className} ${small ? 'button_small' : ''}`}>
        {text}
      </span>
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.any.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
};

export default memo(Button);
