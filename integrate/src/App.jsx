import { Link, Route, Routes } from "react-router-dom";
import Show from './components/Show';
import Home from './components/Home';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <nav className="flex justify-center gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
};

export default App;
