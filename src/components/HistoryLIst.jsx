import React from 'react';

const HistoryList = ({ history }) => {
  return (
    <div>
      <h2>View History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((cat, index) => (
            <li key={index}>
              <img src={cat.url} alt="Previously Viewed Cat" style={{ width: '100px', height: '50px' }} />
              <p>Breed Name: {cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Unknown'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cats have been viewed yet!</p>
      )}
    </div>
  );
};

export default HistoryList;