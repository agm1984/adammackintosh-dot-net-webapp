import React from 'react'

const NotFoundPage = () => (
  <div className="page_container">
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '6rem' }}>
        404
      </div>
      <div style={{ fontSize: '3rem' }}>
        PAGE NOT FOUND
      </div>
    </div>
  </div>
)

export default NotFoundPage
