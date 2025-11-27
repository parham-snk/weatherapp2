import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './output.css';
import ApiErrorPage from './pages/api-error-state';
import HomePage from './pages/home';

function App() {
  return (
    <div style={{ height: "100%", }} className="min-h-screen relative w-full z-1  bg-gradient-to-b from-bblue700 to-bblue500 flex flex-col align-middle items-center">
      <BrowserRouter>
        <Navbar />
        <div className="flex justify-center align-top items-center pt-32 z-0 w-custom" style={{zIndex:0}}>
          <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='*' Component={ApiErrorPage} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
