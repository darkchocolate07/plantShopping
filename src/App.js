import './App.css';
import HomePage from './Components/HomePage';
import ProductPage from './Components/PrdouctPage';
import Cart from './Components/Cart'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/ProductPage' element = {<ProductPage/>}/>
          <Route exact path="/Cart" element = {<Cart/>}/>
        </Routes>
    </Router>
  );
}

export default App;
