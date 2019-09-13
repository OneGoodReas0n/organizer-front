import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const themes = [
  {
    id: 1,
    text: <FormattedMessage {...messages.themesProfile} />,
  },
  {
    id: 2,
    text: <FormattedMessage {...messages.themesTickets} />,
  },
  {
    id: 3,
    text: <FormattedMessage {...messages.themesPayments} />,
  },
];

export default themes;
