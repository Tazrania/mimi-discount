import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Oneway from './Oneway'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Content'>
        <Routes>
          <Route path='/first-way' element={<Oneway />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
