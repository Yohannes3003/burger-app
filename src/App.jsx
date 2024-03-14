import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import About from './page/about';
import Order from './page/order';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
