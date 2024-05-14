import { useState } from 'react';
import './App.css';
import { mockTransactions } from './assets/Components/Data.js';
import TemporaryDrawer from './assets/Components/Sidebar';
import Dashboard from './assets/Components/Heading';
import SmallOutlinedCards from './assets/Components/PrimaryDashboard';
import ScrollList from './assets/Components/Scrollbox';

function App() {
  return (
    <div>
      <TemporaryDrawer></TemporaryDrawer>
      <Dashboard></Dashboard>
      <SmallOutlinedCards></SmallOutlinedCards>
      <ScrollList mockTransactions={mockTransactions}></ScrollList>
    </div>
  );
}

export default App
