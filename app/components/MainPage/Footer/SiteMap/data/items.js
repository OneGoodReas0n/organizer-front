import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const items = [
  {
    id: 1,
    title: <FormattedMessage {...messages.sectionMainPageText} />,
    links: [
      {
        id: 1,
        title: <FormattedMessage {...messages.linkCreateEventText} />,
      },
      { id: 2, title: <FormattedMessage {...messages.linkEventsText} /> },
      { id: 3, title: <FormattedMessage {...messages.linkSignUpText} /> },
    ],
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.sectionSupportText} />,
    links: [
      { id: 1, title: <FormattedMessage {...messages.linkFAQText} /> },
      {
        id: 2,
        title: <FormattedMessage {...messages.linkContactFormText} />,
      },
    ],
  },
];

export default items;
