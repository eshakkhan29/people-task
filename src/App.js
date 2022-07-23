import { useEffect, useState } from 'react';
import './App.css';
import InfoList from './components/InfoList';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "https://swapi.dev/api/people/?fbclid=IwAR1Z7G4K9k4OHObGBgZNgHRo0XXVEzjczOw19W6k40_saLToGZ9uSnQYSKM&format=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="grid w-full content-center justify-center" >
      <div className="w-[1000px] my-10 rounded-lg bg-slate-100">
        {data.results?.map((item, i) => <InfoList data={item} key={i} />)}
      </div>
    </div>
  );
}

export default App;
