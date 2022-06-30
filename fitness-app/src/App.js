import { Box } from '@mui/material';
import {Route, Routes} from '';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import './App.css';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

function App() {
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
}

export default App;
