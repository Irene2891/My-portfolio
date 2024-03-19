import React from "react";
import {Route, Routes } from "react-router-dom";
import Layout from './components/ui/layout/Layout';
import NavBar from './components/ui/navBar/NavBar';
import Footer from './components/ui/footer/Footer';
import Work from './components/pages/work/Work';
import NotFound from './components/pages/notFound/NotFound';
import './index.css';
import Contact from './components/pages/contact/Contact'
import Nutshell from './components/pages/nutshell/Nutshell';




const myRoutes = [
  {path: '/nutshell', component: <Nutshell />, exact: true},
  {path: '/contact', component: <Contact /> },
  {path: '/work', component: <Work /> },
  {path: '*', component: <NotFound />},
];


function App() {

    return (
      <div className="App">
         <NavBar/>
        <Layout/>
        <main className='main-content'>
              <Routes>
              {myRoutes.map(({component, path})=>(  
             <Route path={path} key={path} 
             element={component} />))}
            </Routes>
            </main>
            <Layout/>
            <Footer/>
          </div>
        
       )
    
  };


export default App;
