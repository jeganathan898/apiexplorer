import React from 'react';

function Backdrop({ open, onClick }) {
  return open ? <div className="backdrop" onClick={onClick}></div> : null;
}

export default Backdrop;