import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import reducer from './reducer';
import SearchBlock from '../../components/SupportPage/SearchBlock/Loadable';
import Header from '../../components/MainPage/Header/Loadable';

export function Support() {
  return (
    <div>
      <Helmet>
        <title>Support</title>
        <meta name="description" content="Description of Support" />
      </Helmet>
      <Header />
      <SearchBlock />
    </div>
  );
}

Support.propTypes = {};

export default memo(Support);
