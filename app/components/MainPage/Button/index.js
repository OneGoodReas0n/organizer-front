import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './button.scss';
import { Link } from 'react-router-dom';

function Button({
  text,
  className = '',
  small = false,
  login = true,
  onClick,
}) {
  return (
    <div onClick={onClick}>
      {login ? (
        <Link to="/login">
          <span
            className={`button ${className} ${small ? 'button_small' : ''}`}
          >
            {text}
          </span>
        </Link>
      ) : (
        <span className={`button ${className} ${small ? 'button_small' : ''}`}>
          {text}
        </span>
      )}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.any.isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
  login: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(Button);
