import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const IMAGE_URL =
    'https://raw.githubusercontent.com/mister-josuecedeno/lone-wolf-tattoo/master/src/json/artists.json';

  // Breaking BAD URL - `https://www.breakingbadapi.com/api/characters?name=${query}`
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(IMAGE_URL);
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
