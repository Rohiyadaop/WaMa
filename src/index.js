import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , Route , RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './components/login';
import About from './pages/about';
import SignUp from './components/signUp';
import Buyer from './pages/buyer';
import Sheller from './pages/sheller';
import Skilltraning from './pages/skilltraning'
import Contect from './pages/contect';
import Details from './components/details';
import LiveClassesPage from './components/videocall';
import { SocketProvider } from './context/Socket';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/signUP",
    element : <SignUp />
  },
  {
    path : "/buyer",
    element : <Buyer />
  },
  {
    path : "/buyer/details",
    element : <Details />
  },
  {
    path : "/sheller",
    element : <Sheller />
  },
  {
    path : "/Skilltraning",
    element : <Skilltraning />
  },
  {
    path : "/liveclass",
    element : <LiveClassesPage />
  },
  {
    path : "/Skilltraning/buyer",
    element : <Buyer />
  },
  {
    path : "/Skilltraning/contect",
    element : <Contect />
  },
  {
    path : "/Skilltraning/sheller",
    element : <Sheller />
  },
  {
    path : "/Skilltraning/about",
    element : <About />
  },
  {
    path : "/contect",
    element : <Contect />
  },
  {
    path :"/about",
    element : <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <SocketProvider>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
    </SocketProvider>
   
 
);

reportWebVitals();
