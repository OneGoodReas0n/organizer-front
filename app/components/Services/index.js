import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ServiceItem from './ServiceItem';
import items from './data/items';
import './service.scss';

function Services() {
  return (
    <div className="services">
      <span className="services-title">
        <FormattedMessage {...messages.IntroText} />
      </span>
      <div className="services-container">
        {items.map(el => (
          <ServiceItem key={el.id} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
}

Services.propTypes = {};

export default memo(Services);
