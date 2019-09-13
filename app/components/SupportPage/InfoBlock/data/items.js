import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const items = [
  {
    id: 1,
    title: <FormattedMessage {...messages.account} />,
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.location} />,
  },
  {
    id: 3,
    title: <FormattedMessage {...messages.services} />,
  },
  {
    id: 4,
    title: <FormattedMessage {...messages.payment} />,
  },
  {
    id: 5,
    title: <FormattedMessage {...messages.messages} />,
  },
  {
    id: 6,
    title: <FormattedMessage {...messages.other} />,
  },
];

export default items;
