/*
 * Workflow Messages
 *
 * This contains all the text for the Workflow component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Workflow';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Workflow component!',
  },

  IntroText: {
    id: `${scope}.introText`,
    defaultMessage: 'Start event process',
  },

  HaveFunText: {
    id: `${scope}.haveFunText`,
    defaultMessage: 'Have fun !',
  },

  SetupEventTitle: {
    id: `${scope}.setupEventTitle`,
    defaultMessage: 'Setup event',
  },

  SetupEventDesc: {
    id: `${scope}.setupEventDesc`,
    defaultMessage:
      'Fill all needed information about event, add some photos and description',
  },

  FindPlaceTitle: {
    id: `${scope}.findPlaceTitle`,
    defaultMessage: 'Find an appropriate place',
  },

  FindPlaceDesc: {
    id: `${scope}.findPlaceDesc`,
    defaultMessage:
      'Fill all needed information about event, add some photos and description',
  },

  ChooseServiceTitle: {
    id: `${scope}.chooseServiceTitle`,
    defaultMessage: 'Setup event',
  },

  ChooseServiceDesc: {
    id: `${scope}.chooseServiceDesc`,
    defaultMessage:
      'Fill all needed information about event, add some photos and description',
  },
});
