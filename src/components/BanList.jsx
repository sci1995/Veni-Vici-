import React from 'react';

const BanList = ({ banList }) => {
  return (
    <div>
      <h2>Banned Attributes</h2>
      {banList.length > 0 ? (
        <ul>
          {banList.map((attribute, index) => (
            <li key={index}>{attribute}</li>
          ))}
        </ul>
      ) : (
        <p>No attributes have been banned yet!</p>
      )}
    </div>
  );
};

export default BanList;