import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const IMAGE_URL =
    'https://raw.githubusercontent.com/mister-josuecedeno/lone-wolf-tattoo/master/src/json/artists.json';

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(IMAGE_URL);
      // console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
