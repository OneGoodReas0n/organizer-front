/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Header component!',
  },

  linkCreateEvent: {
    id: `${scope}.createEvent`,
    defaultMessage: 'Create event',
  },

  linkEvents: {
    id: `${scope}.events`,
    defaultMessage: 'Events',
  },

  linkTickets: {
    id: `${scope}.tickets`,
    defaultMessage: 'Tickets',
  },

  linkAbout: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },

  linkSupport: {
    id: `${scope}.support`,
    defaultMessage: 'Support',
  },

  linkLogin: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
