/*
 * Services Messages
 *
 * This contains all the text for the Services component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Services';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Services component!',
  },

  IntroText: {
    id: `${scope}.introText`,
    defaultMessage: 'Services that you get',
  },

  MusicText: {
    id: `${scope}.musicText`,
    defaultMessage: 'Music',
  },

  CameraText: {
    id: `${scope}.cameraText`,
    defaultMessage: 'Photo & Video',
  },

  FoodText: {
    id: `${scope}.foodText`,
    defaultMessage: 'Food',
  },

  LogisticText: {
    id: `${scope}.logisticText`,
    defaultMessage: 'Logistic',
  },

  EntertainText: {
    id: `${scope}.ntertainText`,
    defaultMessage: 'Entertainment',
  },

  WaitorText: {
    id: `${scope}.waitorText`,
    defaultMessage: 'Waitors',
  },
});
