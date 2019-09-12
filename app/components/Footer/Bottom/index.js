import React, { memo } from 'react';

import langs from './data/langs';
import links from './data/links';
import socials from './data/socials';
import './bottom.scss';

function Bottom() {
  return (
    <div className="bottom">
      <div className="content">
        <div className="language_picker">
          <ul className="picker-menu">
            {langs.map(e => (
              <li key={e.id} id={e.id}>
                <img href={e.picture} className="lang_icon" alt="" />
                {e.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="addInfo">
          {links.map(e => (
            <span className="item" key={e.id}>
              {e.title}
            </span>
          ))}
        </div>
        <div className="social">
          {socials.map(el => (
            <div className="item_block" key={el.id}>
              <div className="svg">{el.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Bottom.propTypes = {};

export default memo(Bottom);
