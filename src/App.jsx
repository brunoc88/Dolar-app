import { useState, useEffect } from "react";
import { getAll } from "./services/dolarServices";
import { Title, Dolar } from "./components/dolar";

const App = () => {
  const [dolar, setDolar] = useState([]);

  useEffect(() => {
    getAll()
      .then(data => setDolar(data))
      .catch(() => console.log({ error: "Surgió un problema" }));
  }, []);

  return (
    <div>
      <Title/>
      <Dolar dolar = {dolar}/>
    </div>
  );
};

export default App;
