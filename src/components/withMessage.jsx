// withMessage.js
import React from 'react';

function withMessage(Component, message) {
  return function WrappedComponent(props) {
    return (
      <div>
        <p style={{ color: 'blue' }}>{message}</p>
        <Component {...props} />
      </div>
    );
  };
}

export default withMessage;
