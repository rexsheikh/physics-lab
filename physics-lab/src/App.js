import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DemoPage from './pages/DemoPage';
import GamesPage from './pages/GamesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/games" element={<GamesPage />} />
    </Routes>
  );
}

export default App;
