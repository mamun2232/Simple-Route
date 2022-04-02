import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Food from './components/Food/Food';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FoodDetials from './components/FoodDetials/FoodDetials';
import BdAddress from './components/BdAddress/BdAddress';
import UseAddress from './components/UseAddress/UseAddress';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/Foods/:Detilas' element={<FoodDetials></FoodDetials>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bdAddress' element={<BdAddress></BdAddress>}></Route>
          <Route path='UsAddress' element={<UseAddress></UseAddress>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
