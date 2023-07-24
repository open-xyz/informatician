import React from 'react';

const WelcomeUser = ({ user }) => {

    
  const { name, email, picture } = user;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-md text-center h-max">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Welcome, {name}!</h2>
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={picture} alt={name} />
      <p className="text-lg mb-4">Email: {email}</p>
      <a href="/" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">Go to Home Page</a>
    </div>
  );
};

export default WelcomeUser;
