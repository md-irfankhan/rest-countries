import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries';
import VisitedCountries from './components/VisitedCountries/VisitedCountries';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true').
      then(res => res.json()).
      then(data => setCountries(data));
  }, [])
  //  console.log(countries['150']);

  const [allTab,setAlltab]=useState(true);
  const [visited,setVisited]=useState([]);
  
  function handleRemove(countries){
    const updatedVisited=visited.filter(visit=>visit!==countries);
    setVisited(updatedVisited);
    
  }
  // console.log(visited)
  return (
   
    <>
    <div className='flex justify-center gap-3'>
      
      <button  className={allTab?'btn bg-[#FF894F]':'btn'} onClick={()=>setAlltab(true)}>All</button>
      <button className={!allTab?'btn bg-[#FF894F]':'btn'} onClick={()=>setAlltab(false)}>Visited</button>
    </div>
      <h2 className='text-[20px] font-bold'>Rest Countries:</h2>

      <div className='grid place-content-center  lg:grid-cols-3 gap-2 my-3 '>
        {
         allTab && countries.map(countries => <Countries  countries={countries} visited={visited} setVisited={setVisited}></Countries>)
        }
        {
          allTab || visited.map(countries=><VisitedCountries handleRemove={handleRemove} countries={countries}></VisitedCountries>)
        }
      </div>
    </>
  )
}

export default App
