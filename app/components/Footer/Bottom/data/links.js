import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const links = [
  {
    id: 1,
    title: <FormattedMessage {...messages.lorem} />,
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.loremIpsum} />,
  },
  {
    id: 3,
    title: <FormattedMessage {...messages.lorem} />,
  },
];

export default links;
