import React from 'react';
import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import Reward from '@/modules/core/components/molecules/Reward';
import AppRoutes from './routes';
import '@/assets/styles/main.scss';

function App() {
  return (
    <div className="main">
      <NavMenu />
      <AppRoutes />
      <Reward/>
      <MainFooter />
    </div>
  );
}

export default App;
