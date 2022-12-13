import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { CreatorPage } from './modules/marvel-characters/pages/CreatorPage/index.jsx';
import ComicsPage from './modules/marvel-characters/pages/CómicsPage/index.jsx';
import EventsPage from './modules/marvel-characters/pages/EventsPage/index.jsx';
import FeaturedCharacters from './modules/marvel-characters/pages/featuredCharactersPage/index.jsx';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharacterPage />} />
    <Route exact path="/creator" element={<CreatorPage />} />
    <Route exact path="/comics" element={<ComicsPage />} />
    <Route exact path="/events" element={<EventsPage/>} />
    <Route exact path="/featured-characters" element={<FeaturedCharacters />} />
    <Route exact path="/error" element={<NotFoundPage404 />} />
  </Routes>
);

export default AppRoutes;
