import React from 'react';
import { SOCIAL_LINKS } from '../../utils/constants';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ICON_MAP = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Twitter: FaTwitter
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ platform, url }) => {
        const Icon = ICON_MAP[platform];
        return (
          <a 
            key={platform}
            href={url} 
            className="text-2xl hover:text-green-200"
            aria-label={platform}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;