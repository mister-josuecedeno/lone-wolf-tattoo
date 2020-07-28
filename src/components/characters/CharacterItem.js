import React from 'react';

const CharacterItem = ({ item }) => {
  const instaURL = 'https://www.instagram.com/';
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
              <strong>Instagram: </strong>
              <a href={instaURL + item.instagram} target='_blank'>
                {item.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
