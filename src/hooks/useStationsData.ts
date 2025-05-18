// src/hooks/useStationsData.ts
import { useState, useEffect } from 'react';

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

const useStationsData = () => {
  const [stations, setStations] = useState<Station[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStations() {
      try {
        const response = await fetch('src/stations_kobe_line.json'); // public フォルダにあると仮定
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Station[] = await response.json();
        setStations(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchStations();
  }, []);

  return { stations, loading, error };
};

export default useStationsData;