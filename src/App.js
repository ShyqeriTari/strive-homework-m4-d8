import MyNavbar from "./components/MyNavbar";
import SecondNavbar from "./components/SecondNavbar";
import "./albertoCss.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplaySections from './components/DisplaySections'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import TvShows from './components/TvShows'


function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <SecondNavbar />
      <Routes>
      <Route path='/tv-shows' element={<TvShows/>} />
        <Route path='/' element={<DisplaySections/> } />
        <Route path='/details/:movieId' element={<MovieDetails />} />
        <Route path='*' element={<center><h1 className="text-white">404 - PAGE NOT FOUND</h1></center>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
