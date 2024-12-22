import React from 'react';
import { NAV_LINKS } from '../../utils/constants';

const Navigation = () => {
  return (
    <ul className="flex space-x-6">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className="hover:text-green-200">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;