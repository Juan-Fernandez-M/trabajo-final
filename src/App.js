import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from "./components/Header/index";
import Footer from "./components/Footer/Footer";
import Product from './pages/product/Products';
import Detail from './pages/detail/detail';
import Result from './pages/Result/Result';
import Main from './pages/main/Main';
import CheckIn from './pages/Check-in/CheckIn'

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Route exact path='/'> <Main /> </Route>
      <Route path='/products'> <Product /> </Route>
      <Route path='/detail/:id'> <Detail /> </Route>
      <Route path='/result/search'> <Result /> </Route>
      <Route path='/user/CheckIn'> <CheckIn /> </Route>
     
    
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
