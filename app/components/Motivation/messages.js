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
});
