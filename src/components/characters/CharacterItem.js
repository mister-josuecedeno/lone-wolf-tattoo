import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Artist Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Instagram:</strong> {item.instagram}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
