// GradientContainer.js

import React from 'react';

const GradientContainer = ({ color, children }) => {
  const getGradientStyles = () => {
    switch (color) {
      case 'purpleToBlue':
        return 'bg-gradient-to-br from-purple-600 to-blue-500';
      case 'cyanToBlue':
        return 'bg-gradient-to-br from-cyan-500 to-blue-500';
      case 'greenToBlue':
        return 'bg-gradient-to-br from-green-400 to-blue-600';
      case 'purpleToPink':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'pinkToOrange':
        return 'bg-gradient-to-br from-pink-500 to-orange-400';
      case 'tealToLime':
        return 'bg-gradient-to-br from-teal-300 to-lime-300';
      case 'redToYellow':
        return 'bg-gradient-to-br from-red-200 via-red-300 to-yellow-200';
      default:
        return '';
    }
  };

  return (
    <div className={`relative p-0.5 mb-2 me-2 overflow-hidden rounded-lg ${getGradientStyles()}`}>
      {children}
    </div>
  );
};

export default GradientContainer;
