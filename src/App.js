import * as React from 'react';
import ResponsiveDrawer from './components/AppBar';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer/>
    </BrowserRouter>
  );
}