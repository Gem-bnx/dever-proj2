import './App.css';
import Banner from './components/Banner/index.js';
import Header from './components/Header/index.js';
import Process from './components/Process/index.js';
import Service from './components/Service/index.js';
import Product from './components/Product/index.js';
import Company from './components/Company/index.js';
import User from './components/User/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Process></Process>
      <Service></Service>
      <Product></Product>
      <Company></Company>
      <User></User>
      <Footer></Footer>
    </div>
  );
}

export default App;
