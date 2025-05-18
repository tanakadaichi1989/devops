import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Station {
  id: string;
  numbering: string;
  line: string;
  name: string;
  nameEnglish: string;
  latitude: string;
  longitude: string;
  isFavorite: boolean;
}

async function load<T>(filePath: string): Promise<T> {
  try {
    const response = await fetch(filePath);
    const data = response.json() as T;
    return data;
  } catch(error) {
    throw error;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const stations = await load<Station[]>('stations_kobe_line.json');
        setStations(stations);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    {/*}
     <h2>神戸線</h2>
      {stations.length > 0 ? (
        <>
          {stations.map((station) => (
            <div key={station.id}>
              <p>{station.name}({station.nameEnglish})</p>
            </div>
          ))}
        </>
      ) : (
        <p>No stations data available.</p>
      )}
    { */ }
    </>
  )
}

export default App
