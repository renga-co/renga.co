import React from 'react';
import cx from 'classnames';
import './referral-list.css';

const ReferralList = ({ className, referrals, ...props }) => (
  <div
    className={cx(
      'ReferralList bgc-brown pv-3 ph-3 pa-4-m br-12 w-100p',
      className,
    )}
    {...props}>
    {referrals.map(referral => (
      <div
        key={referral.source}
        className="ReferralList-item mh-auto mb-2 mh-0-m mb-3-m br-4 bgc-white fs-18 pa-3"
        style={{ minWidth: '16em' }}>
        <cite className="x xa-center mb-3 fs-16">
          <div className="mr-2 br-round of-hidden" style={{ maxWidth: 48 }}>
            <img src={referral.image.publicURL} alt={referral.source} />
          </div>
          <div>
            <strong>{referral.source}</strong>
            <div className="c-gray4">{referral.title}</div>
          </div>
        </cite>
        <blockquote style={{ marginTop: 'auto' }}>
          {referral.content}
        </blockquote>
      </div>
    ))}
  </div>
);

export default ReferralList;
