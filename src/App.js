import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/blogs" Component={BlogPage} />
      </Routes>
    </div>
  );
}

export default App;
