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
import Workflow from '../../components/Workflow';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Intro />
      <Workflow />
      <Services />
      <Motivation />
      <Footer />
    </div>
  );
}
