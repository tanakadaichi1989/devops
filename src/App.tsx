// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StationCell from './StationCell';
import useStationsData from './hooks/useStationsData'

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

function App() {
  //const [count, setCount] = useState(0);
  const { stations, loading, error } = useStationsData();

  if (loading) {
    return <div>Loading stations data...</div>;
  }

  if (error) {
    return <div>Error loading stations: {error}</div>;
  }

  return (
    <>
    { /* }
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
    { */ }
      <div>
        <h2>神戸線</h2>
        {stations && stations.map((station: Station) => (
          <StationCell
            key={station.id}
            numbering={station.numbering}
            name={station.name}
            nameEnglish={station.nameEnglish}
          />
        ))}
      </div>
    </>
  )
}

export default App
