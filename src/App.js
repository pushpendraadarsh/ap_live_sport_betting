import Index from './Pages/Index';
import Home from './Pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
