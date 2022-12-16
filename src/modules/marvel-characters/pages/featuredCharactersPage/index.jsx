import React from 'react';
//import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';
import CharacterCard from '../../components/CharacterCard';

export function FeaturedCharacters() {
  return (
    <div className="mvl-characters-page">
     
      <div className="container">

        <h1>FEATURED CHARACTERS</h1>
        <div className="container-card ">
          <CharacterCard
            name="SHURI"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/107shr_ons_crd_03.jpg"
          />
          <CharacterCard
            name="RIRI WILLIAMS"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/124irh_ons_crd_01.jpg"
          />
          <CharacterCard
            name="M'BAKU"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/276mbk_ons_crd_01.jpg"
          />
          <CharacterCard
            name="OKOYE"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/110oky_ons_crd_04.jpg"
          />
          <CharacterCard
            name="NAMOR"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/129nam_ons_crd_01.jpg"
          />
          <CharacterCard
            name="QUEEN RAMONDA"
            image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/277qrm_ons_crd_01.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCharacters;
