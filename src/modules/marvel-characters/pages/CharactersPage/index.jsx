import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';
import FeaturedCharacters from '../featuredCharactersPage';
import CharacterSpotlight from 'src/modules/core/components/molecules/CharacterSpotlight';

export function CharacterPage() {
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <section className="mvl-section-card">
          {/* <p>Use this space to add some cards and other content </p> */}
        </section>
        <FeaturedCharacters />
        <CharacterSpotlight />
        <h1>MARVEL CHARACTERS LIST</h1>
        <CharactersGrid />
      </div>
    </div>
  );
}
