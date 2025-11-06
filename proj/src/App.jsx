import './App.scss'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SingleCard from './components/SingleCard/SingleCard';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
              <Header/>
              <Content/>
              <Footer/>
          </>
        }/>
        <Route path=':id' element={
          <>
              <Header/>
              <SingleCard/>
              <Footer/>
          </>
        }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
