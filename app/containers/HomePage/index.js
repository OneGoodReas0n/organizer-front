/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Header from '../../components/Header';
import Motivation from '../../components/Motivation';
import Intro from '../../components/Intro';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Intro />
      <Motivation />
    </div>
  );
}
