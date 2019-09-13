import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import items from './data/items';
import './siteMap.scss';

function SiteMap() {
  return (
    <div className="sitemap">
      {items.map(e => (
        <div className="page_block" key={e.id}>
          <span className="title">{e.title}</span>
          {e.links.map(el => (
            <div className="link-list" key={el.id}>
              <span className="link">{el.title}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

SiteMap.propTypes = {};

export default memo(SiteMap);
