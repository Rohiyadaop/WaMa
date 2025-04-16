import Header from  './components/header';
import Homepage from './components/homepage';
import Footer from './components/footer';
import About from './pages/about';
import { SocketProvider } from './provider/socket';
// import { SocketProvider } from './provider/socket';
function App() {

  return (
    <>
    <SocketProvider>
           <Header />
            <Homepage />
            <About />
            <Footer />
    </SocketProvider>     
    </>
  );
}

export default App;
