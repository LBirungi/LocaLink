
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Navbar from './Navbar';






function App() {
  
  return (
    <div className="flex h-screen">
      <Navbar/>
     <div 
     className="hidden 1g:block w-1/2 bg-cover bg-center"
     style={{backgroundImage:'url("")'}}></div>
     <div className="w-full 1g:w-1/2 p-8 flex flex-col 
     justify-center items-center">
      <Header/>
      <Footer/>
      </div>
      </div>
  );
};
export default App;



    