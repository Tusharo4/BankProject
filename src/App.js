import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import About from './component/Pages/About';
import Home from './component/Pages/Home';
import Login from './component/Pages/Login';
import Signup from './component/Pages/SignUp';
import Footer from './component/Website/Footer';
import HeaderComponent from './component/Website/Header';
import './App.css'
function App() {

  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },

  ])

  return (

    <React.Fragment>
      <HeaderComponent />
      <div className='main-body'>
        {routes}
      </div>
      <Footer />
    </React.Fragment>

  );
}

export default App;
