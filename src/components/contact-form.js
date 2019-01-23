// @flow

import React, { Component } from 'react';
import cx from 'classnames';
import { navigate } from 'gatsby';
import Button from '../components/button';
import FormInput from '../components/form-input';
import TextArea from '../components/text-area';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FormLabel = ({ className, children, optional, ...props }) => (
  <label
    className={cx(
      className,
      'FormLabel d-block c-gray3 fw-semibold ls-loose tt-uppercase fs-14',
    )}
    {...props}>
    {children}
    {optional ? '' : <span className="c-geraldine"> *</span>}
  </label>
);

type Props = {
  name: string,
  withMessage: boolean
}

export default class ContactForm extends Component<Props> {
  state = {
    isSubmitting: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    this.setState({ isSubmitting: true });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'));
      })
      .catch(error => {
        this.setState({ isSubmitting: false });
        alert(error)
      });
  };

  render() {
    const { name, withMessage } = this.props;
    const { isSubmitting } = this.state;

    return (
      <form
        className="ContactForm fs-18 ta-left"
        name={name}
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="_email"
        onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value={name} />
        <p className="mb-2" hidden>
          <FormLabel htmlFor="_email">Don’t fill this out</FormLabel>
          <input name="_email" onChange={this.handleChange} />
        </p>
        <div className="x-m">
          <p className="x-1-m mb-2">
            <FormLabel className="mb-1" htmlFor="fullName">
              Full Name
            </FormLabel>
            <FormInput
              id="fullName"
              required
              name="fullName"
              data-autofocus
              onChange={this.handleChange}
            />
          </p>
          <p className="x-1-m ml-2-m mb-2">
            <FormLabel optional className="mb-1" htmlFor="businessName">
              Business Name
            </FormLabel>
            <FormInput
              id="businessName"
              name="businessName"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <p className="mb-2">
          <FormLabel className="mb-1" htmlFor="email">
            Email
          </FormLabel>
          <FormInput
            id="email"
            required
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </p>
        <p className="mb-2">
          <FormLabel optional className="mb-1" htmlFor="phoneNumber">
            Phone Number
          </FormLabel>
          <FormInput
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            onChange={this.handleChange}
          />
        </p>
        {withMessage && (
          <p className="mb-2">
            <FormLabel className="mb-1" htmlFor="message">
              Message
            </FormLabel>
            <TextArea
              id="message"
              required
              name="message"
              minRows={3}
              onChange={this.handleChange}
            />
          </p>
        )}
        <p className="mt-4">
          <Button className="mh-auto" style={{ maxWidth: 200 }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </p>
      </form>
    );
  }
}
