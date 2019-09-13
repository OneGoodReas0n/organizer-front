/*
 * Intro Messages
 *
 * This contains all the text for the Intro component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Intro';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Intro component!',
  },

  IntroBigText: {
    id: `${scope}.introBigText`,
    defaultMessage: 'A new approach in creating events',
  },

  IntroContentText: {
    id: `${scope}.introContentText`,
    defaultMessage: 'Host your best event in less than 15 mins',
  },

  IntroButtonText: {
    id: `${scope}.introButtonText`,
    defaultMessage: `Let's start`,
  },
});
