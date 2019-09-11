import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

import SetupEventIllustration from '../assets/setup-event-illustration.svg';
import FindPlaceIllustration from '../assets/find-place-il.svg';
import ChooseServiceIllustration from '../assets/choose-service-il.svg';

const items = [
  {
    id: 1,
    title: <FormattedMessage {...messages.SetupEventTitle} />,
    description: <FormattedMessage {...messages.SetupEventDesc} />,
    picture: <SetupEventIllustration />,
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.FindPlaceTitle} />,
    description: <FormattedMessage {...messages.FindPlaceDesc} />,
    picture: <FindPlaceIllustration />,
  },
  {
    id: 3,
    title: <FormattedMessage {...messages.ChooseServiceTitle} />,
    description: <FormattedMessage {...messages.ChooseServiceDesc} />,
    picture: <ChooseServiceIllustration />,
  },
];

export default items;
