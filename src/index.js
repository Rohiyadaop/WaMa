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
import LiveClassesPage from './components/videocall';

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
    path : "/sheller",
    element : <Sheller />
  },
  {
    path : "/Skilltraning",
    element : <Skilltraning />
  },
  {
    path : "/Skilltraning/liveclass",
    element : <LiveClassesPage />
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
  
  <RouterProvider router={router}>
  </RouterProvider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
