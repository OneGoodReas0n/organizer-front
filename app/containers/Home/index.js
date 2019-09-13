import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Header from '../../components/MainPage/Header';
import Motivation from '../../components/MainPage/Motivation';
import Intro from '../../components/MainPage/Intro';
import Workflow from '../../components/MainPage/Workflow';
import Services from '../../components/MainPage/Services';
import Footer from '../../components/MainPage/Footer';

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
