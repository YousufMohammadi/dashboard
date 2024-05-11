import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
