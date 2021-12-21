import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Header from './pages/shared/Hedaer/Header';
import Home from './pages/home/Home';
import Footer from './pages/shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          
        </Routes>
        <Footer></Footer>


      </BrowserRouter>
    </div>
  );
}

export default App;
