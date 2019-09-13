/*
 * Motivation Messages
 *
 * This contains all the text for the Motivation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Motivation';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Motivation component!',
  },

  MotivationTitle: {
    id: `${scope}.motivationTitle`,
    defaultMessage: 'Are you ready to create something really cool?',
  },

  MotivationButtonText: {
    id: `${scope}.motivationButtonText`,
    defaultMessage: `Let's start!`,
  },
});
