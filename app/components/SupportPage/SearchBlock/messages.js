import { defineMessages } from 'react-intl';

export const scope = 'app.components.SearchBlock';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SearchBlock component!',
  },

  title: {
    id: `${scope}.title`,
    defaultMessage: 'How can we help you?',
  },

  formPlaceholder: {
    id: `${scope}.formPlaceholder`,
    defaultMessage: 'Start typing your question...',
  },

  questionTitle: {
    id: `${scope}.questionTitle`,
    defaultMessage: 'Popular themes: ',
  },

  themesProfile: {
    id: `${scope}.themesProfile`,
    defaultMessage: 'Profile',
  },

  themesTickets: {
    id: `${scope}.themesTickets`,
    defaultMessage: 'Tickets',
  },

  themesPayments: {
    id: `${scope}.themesPayments`,
    defaultMessage: 'Payments',
  },
});
