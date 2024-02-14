// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAnimes } from './animeSlice';
// import AnimeCard from '../../components/AnimeCard';

// const AnimeList = () => {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.anime);

//   useEffect(() => {
//     dispatch(fetchAnimes('')); 
//   }, [dispatch]);

//   return (
//     <div>
//       {status === 'loading' && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {status === 'succeeded' &&
//         items.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
//     </div>
//   );
// };

// export default AnimeList;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimes } from './animeSlice';
import AnimeCard from '../../components/AnimeCard';

const AnimeList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.anime);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchAnimes('')); // Fetch all anime characters initially or based on a specific term
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAnimes(searchTerm)); // Fetch anime characters based on the search term
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for an anime character..."
        />
        <button type="submit">Search</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {status === 'succeeded' &&
        items.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)}
    </div>
  );
};

export default AnimeList;
