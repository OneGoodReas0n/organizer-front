import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
// import reducer from './reducer';

import messages from './messages';

export function Support() {
  return (
    <div>
      <Helmet>
        <title>Support</title>
        <meta name="description" content="Description of Support" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Support.propTypes = {};

export default memo(Support);
