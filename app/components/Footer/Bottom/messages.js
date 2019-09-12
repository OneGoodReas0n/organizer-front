import { defineMessages } from 'react-intl';

export const scope = 'app.components.Bottom';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Bottom component!',
  },

  lorem: {
    id: `${scope}.lorem`,
    defaultMessage: 'Lorem',
  },

  loremIpsum: {
    id: `${scope}.loremIpsum`,
    defaultMessage: 'Lorem ipsum',
  },
});
