import React, { memo } from 'react';

import SiteMap from './SiteMap';
import Bottom from './Bottom';

function Footer() {
  return (
    <div className="footer">
      <hr />
      <SiteMap />
      <hr />
      <Bottom />
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
