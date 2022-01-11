
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Index from './components/Index';
import Chat from './components/Chat';

function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
    </Router>

  );
}

export default App;
