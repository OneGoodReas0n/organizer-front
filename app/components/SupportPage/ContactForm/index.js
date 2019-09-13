/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useState, useEffect } from 'react';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages, { scope } from './messages';
import './contact-form.scss';
import Button from '../../MainPage/Button/index';

function ContactForm({ intl }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="contact-form">
      <h4>
        <FormattedMessage {...messages.title} />
      </h4>
      {isOpen ? (
        <form className="send-form">
          <span className="form-title">
            <FormattedMessage {...messages.formTitle} />
          </span>
          <div className="form-group">
            <span className="float-right" onClick={toggle}>
              X
            </span>
            <label htmlFor="email">
              {intl.formatMessage({ id: `${scope}.email` })}
            </label>
            <input
              placeholder={intl.formatMessage({
                id: `${scope}.emailPlaceholder`,
              })}
              name="email"
              // className={`${e.type === 'textarea' ? 'textarea' : ''}`}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              {intl.formatMessage({ id: `${scope}.name` })}
            </label>
            <input
              placeholder={intl.formatMessage({
                id: `${scope}.namePlaceholder`,
              })}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="theme">
              {intl.formatMessage({ id: `${scope}.theme` })}
            </label>
            <input name="theme" />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {intl.formatMessage({ id: `${scope}.message` })}
            </label>
            <input type="textarea" name="message" />
          </div>
          <div className="mb-3 form-group">
            <Button
              text={<FormattedMessage {...messages.sendText} />}
              className="float-right"
              small
              login={false}
            />
          </div>
        </form>
      ) : (
        <Button
          text={<FormattedMessage {...messages.writeToUs} />}
          small
          login={false}
          onClick={toggle}
        />
      )}
    </div>
  );
}

ContactForm.propTypes = {
  intl: intlShape.isRequired,
};

export default (memo, injectIntl)(ContactForm);
