import { defineMessages } from 'react-intl';

export const scope = 'app.components.InfoBlock';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the InfoBlock component!',
  },

  title: {
    id: `${scope}.title`,
    defaultMessage: 'What kind of problem do you have?',
  },

  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },

  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },

  payment: {
    id: `${scope}.payment`,
    defaultMessage: 'Payment',
  },

  messages: {
    id: `${scope}.messages`,
    defaultMessage: 'Messages',
  },

  services: {
    id: `${scope}.services`,
    defaultMessage: 'Services',
  },

  other: {
    id: `${scope}.other`,
    defaultMessage: 'Other',
  },
});
