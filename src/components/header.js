import React from 'react';
import Title from './type-title';

const Header = ({ title, subtitle }) => (
  <header className="ph-2 mt-4 mb-5 ta-center">
    <Title className="mb-2">{title}</Title>
    <p className="fs-21 lh-1d5">{subtitle}</p>
  </header>
);

export default Header;
