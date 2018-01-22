import React from 'react'

const Footer = () => (
  <div id="footer">
    <div id="footer_filler" />
    <div id="footer_text">
      <span id="footer_text-version">Portfolio v{process.env.REACT_APP_VERSION || '1'}</span>
      <span id="footer_text-brand">{(new Date()).getFullYear()} © Adam Mackintosh</span>
    </div>
  </div>
)

export default Footer
