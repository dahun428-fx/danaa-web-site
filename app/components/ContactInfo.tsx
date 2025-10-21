// components/ContactInfo.tsx
"use client"; // This component needs to be a Client Component to access process.env

import React from 'react';

const ContactInfo: React.FC = () => {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!contactEmail) {
    return <p>Contact email not configured.</p>;
  }

  return (
    <div>
      <p>For inquiries, please email us at:</p>
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
    </div>
  );
};

export default ContactInfo;
