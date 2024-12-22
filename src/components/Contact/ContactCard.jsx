import React from 'react';

const ContactCard = ({ icon: Icon, title, content }) => {
  return (
    <div className="text-center">
      <Icon className="text-3xl text-green-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default ContactCard;