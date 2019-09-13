import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import InfoItem from './InfoItem/Loadable';
import items from './data/items';
import './info-block.scss';

function InfoBlock() {
  return (
    <div className="info-blocks">
      <div className="info-container">
        <h3 className="info-title">
          <FormattedMessage {...messages.title} />
          <div className="blocks-container">
            {items.map(e => (
              <InfoItem id={e.id} title={e.title} />
            ))}
          </div>
        </h3>
      </div>
    </div>
  );
}

InfoBlock.propTypes = {};

export default memo(InfoBlock);
