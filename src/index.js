import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , Route , RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './components/login';
import About from './pages/about';
import SignUp from './components/signUp';
import Buyer from './pages/buyer';
import Sheller from './pages/sheller';
import Contect from './pages/contect';
import Details from './components/details';



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
  <React.StrictMode>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
 </React.StrictMode>
);
reportWebVitals();
