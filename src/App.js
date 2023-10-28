import { useEffect } from 'react';
import Footer from './Component/footer';
import Header from './Component/header';
import ApplicationRoutes from './Routes';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <>
    {
            (location.pathname.includes("/dashboard")) ? null : <Header /> 
    }   
    <ApplicationRoutes/>
    {
            (location.pathname.includes("/dashboard")) ? null : <Footer />    

    }
    {/* <Footer/> */}
    </>

  );
}

export default App;
