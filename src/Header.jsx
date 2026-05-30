import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4 flex justify-center items-center">
      <img src="/images/logo.png" alt="Riad Logo" className="w-20 h-20 mr-4" />
      <h1 className="text-xl font-bold">Welcome to Riad</h1>
    </header>
  );
};

export default Header;