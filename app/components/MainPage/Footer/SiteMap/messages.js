/*
 * FooterParts Messages
 *
 * This contains all the text for the FooterParts component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.FooterParts';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FooterParts component!',
  },

  sectionMainPageText: {
    id: `${scope}.sectionMainPageText`,
    defaultMessage: 'Main page',
  },

  sectionSupportText: {
    id: `${scope}.sectionSupportText`,
    defaultMessage: 'Support',
  },

  linkEventsText: {
    id: `${scope}.linkEventsText`,
    defaultMessage: 'Main page',
  },

  linkCreateEventText: {
    id: `${scope}.linkCreateEventText`,
    defaultMessage: 'Create event',
  },

  linkSignUpText: {
    id: `${scope}.linkSignUpText`,
    defaultMessage: 'Sign up',
  },

  linkFAQText: {
    id: `${scope}.linkFAQText`,
    defaultMessage: 'Faq',
  },

  linkContactFormText: {
    id: `${scope}.linkContactFormText`,
    defaultMessage: 'Contact form',
  },
});
