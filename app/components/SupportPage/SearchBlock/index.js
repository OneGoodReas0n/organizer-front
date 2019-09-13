import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import themes from './data/themes';

function SearchBlock() {
  const theme = e => (
    <span key={e.id}>
      {' '}
      <a href="# " key={e.id} className="theme-text">
        {e.text}
      </a>
      {e.id === 3 ? '.' : ','}
    </span>
  );

  return (
    <div className="search-block">
      <div className="search-content">
        <div className="title">
          <FormattedMessage {...messages.title} />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            id="search-input"
            placeholder={
              <FormattedMessage {...messages.searchFormPlaceholder} />
            }
          />
        </div>
        <div className="popular-themes">
          <span className="theme-text">
            <FormattedMessage {...messages.questionTitle} />
            {themes.map(e => theme(e))}
          </span>
        </div>
      </div>
    </div>
  );
}

SearchBlock.propTypes = {};

export default memo(SearchBlock);
