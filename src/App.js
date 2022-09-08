
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './components/layout/Head';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Head/>
      <Header></Header>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
