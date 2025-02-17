import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import Filter from '@/modules/core/components/molecules/Filter';

// import Typed from "typed.js";
const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

export default function CharacterGridPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  async function fetchCharactersAtPage(page = 1) {
    setLoading(true);
    const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
    console.log(data);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
  }


  async function showFilteredCharacters(filterName) {
    const queryDomain = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='+filterName+'&apikey=7f1b25dbb077597aa4531220f5ddad01'
    fetch (queryDomain)
    .then(response => response.json())
    .then(data => setCharacters(data.data.results),
    setTotalItems(characters.length+1));

  }


  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  // const typed = new Typed(".typed", {
  //   strings: ["cargando...", "cargando...", "cargando..."],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });
  // console.log(typed);

  return (
    <>
      <Filter totalItems={totalItems} query={queryParams} onQueryChange={onQueryChange} filterFunction={showFilteredCharacters} />
      <h5 className="mvl-character-grid-title">{totalItems} RESULTS</h5>
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterGrid({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name, image }, index) => (
    <CharacterCard name={name} image={image} key={index} isSkeleton={isLoading} />
  ));
}

export const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} isSkeleton />);
};
