import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyapi.online/api/pokemon"
        );
        const result = await response.json();
        setData(result); 
      } catch (ex) {
        console.log("Data was not fetched", ex);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div >
            {data.map((item) => (
            <div key={data.id}>
              <img src={item.image_url} alt={item.movie}/>
              <h3>{item.pokemon}</h3>
              </div>
            ))}
    </div>
  );
}

export default App;
