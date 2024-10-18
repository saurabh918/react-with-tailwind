import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from './pages/Cart';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart/' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
