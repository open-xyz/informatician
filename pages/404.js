import React from 'react';

const Custom404 = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const titleStyle = {
    fontSize: '36px',
    marginBottom: '10px',
  };

  const imageStyle = {
    maxWidth: '300px',
    margin: '20px auto',
    display: 'block',
  };

  const messageStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    cursor: 'pointer', // Add cursor style for better UX
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <img src="/error.png" alt="404 Image" style={imageStyle} />
      <p style={messageStyle}>Sorry, the page you're looking for does not exist.</p>
      <a href="/" style={{ ...buttonStyle, ...buttonHoverStyle }}>Go back to the homepage</a>
    </div>
  );
};

export default Custom404;
