import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage404 from '@/modules/core/pages/NotFoundPage404';
import { CharacterPage } from '@/modules/marvel-characters/pages/CharactersPage';
import { DetailsPage } from './modules/marvel-characters/pages/DatailsPage/index.jsx';
import ComicsPage from './modules/marvel-characters/pages/CómicsPage/index.jsx';
import EventsPage from './modules/marvel-characters/pages/EventsPage/index.jsx';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<CharacterPage />} />
    <Route exact path="/details" element={<DetailsPage />} />
    <Route exact path="/comics" element={<ComicsPage />} />
    <Route exact path="/events" element={<EventsPage />} />
    <Route element={<NotFoundPage404 />} />
  </Routes>
);

export default AppRoutes;
