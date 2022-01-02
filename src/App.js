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
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/checkout/CheckOut'
import AuthProvider from './context/AuthProvider'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/home" element={<Home />}> </Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
