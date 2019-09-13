import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './header.scss';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

// { title: "Создать мероприятие", link: "" },
//     { title: "Мероприятия", link: "/events" },
//     { title: "Билеты", link: "/" },
//     { title: "О нас", link: "/about" },
//     { title: "Поддержка", link: "/support" },
//     { title: "Регистрация", link: "" }

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="brand">
          <Link className="brand_text" to="/">
            Patpet
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/create-event">
                <FormattedMessage {...messages.linkCreateEvent} />
              </Link>
            </li>
            <li>
              <Link to="/events">
                <FormattedMessage {...messages.linkEvents} />
              </Link>
            </li>
            <li>
              <Link to="/tickets">
                <FormattedMessage {...messages.linkTickets} />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FormattedMessage {...messages.linkAbout} />
              </Link>
            </li>
            <li>
              <Link to="/support">
                <FormattedMessage {...messages.linkSupport} />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FormattedMessage {...messages.linkLogin} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
