/*
 * ContactForm Messages
 *
 * This contains all the text for the ContactForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ContactForm';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ContactForm component!',
  },

  title: {
    id: `${scope}.title`,
    defaultMessage: `Wheather you didn't find the answer you can write to us`,
  },

  formTitle: {
    id: `${scope}.formTitle`,
    defaultMessage: `Contact form`,
  },

  email: {
    id: `${scope}.email`,
    defaultMessage: `Your email`,
  },

  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: `Enter your email please`,
  },

  name: {
    id: `${scope}.name`,
    defaultMessage: `Your name`,
  },

  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: `Enter your name please`,
  },

  theme: {
    id: `${scope}.theme`,
    defaultMessage: `Theme`,
  },

  message: {
    id: `${scope}.message`,
    defaultMessage: `Your message`,
  },

  sendText: {
    id: `${scope}.sendText`,
    defaultMessage: `Send`,
  },

  writeToUs: {
    id: `${scope}.writeToUs`,
    defaultMessage: `Write to us`,
  },
});
