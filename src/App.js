
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import ExerciceDetail from './pages/ExerciceDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/exercises/:id" element={<ExerciceDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
