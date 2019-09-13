import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import messages from './messages';

export function AboutPage() {
  useInjectReducer({ key: 'aboutPage', reducer });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AboutPage.propTypes = {};

export default memo(AboutPage);
