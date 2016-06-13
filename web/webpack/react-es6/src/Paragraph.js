import React from 'react';

export default function Paragraph({ text }) {
  return (
    <p>{text}</p>
  );
}

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired,
};
