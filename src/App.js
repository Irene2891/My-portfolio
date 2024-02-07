
import './App.css';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom"
import HomePage from './components/Pages/HomePage';
import Layout from './components/Layout';


function App() {
    return (
             <div className="App">
        <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
              </Route>
                
            </Routes>
        </Router>
          </div>
     
       )
    
  }


export default App;
