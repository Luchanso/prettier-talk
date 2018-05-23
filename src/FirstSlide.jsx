/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

class Logo extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <div className="bg" />
        <div className="bgAlfa" />
      </div>,
      document.querySelector('.first-slide'),
    );
  }
}

export default Logo;
