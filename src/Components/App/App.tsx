import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import SideBar from '../SideBar';
import Home from '../../pages/Home';

const App: FC = () => {
  return (
    <div className="App">
      <SideBar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
    </div>
  );
};

export default App;
