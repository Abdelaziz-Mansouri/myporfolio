import { useEffect, useState } from 'react';
import './App.css';
import Container from './Components/Container';
import { PropagateLoader } from 'react-spinners';
function App() {
  const [loading , setLoading] = useState(false)
  useEffect(() => { 
      setLoading(true);
      setTimeout(() => { 
        setLoading(false)
       }, 2000)
   }, [])
   
  return (
    <>
      {loading ? 
        <div className='w-full h-screen bg-dark flex justify-center items-center'>
          <PropagateLoader color="#0f9b0f" size={30} loading={loading}/>
        </div>
         
      : <Container />}
      
      
    </>
  );
}

export default App;
