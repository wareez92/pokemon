import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/pokemon");
        const result = await response.json();
        setData(result);
      } catch (ex) {
        console.log("Data was not fetched", ex);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return <Card data={data} />;
}

export default App;
