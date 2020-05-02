import React from "react";
import Header from "./components/Header";

import getInfo from './services/getInfo';

const App = () => {
  const [rels, setRels] = React.useState('loading...'); // [getter, setter]

  // const carregaRels = () => getInfo()
  //   .then((dados) => setRels(JSON.stringify(dados)));

  React.useEffect(() => {
    loadInfo()
  }, []);

  const loadInfo = async () => {
    const dados = await getInfo();
    setRels(JSON.stringify(dados));
  }

  return (
    <div className="App">
      <Header/>
      <p>{rels}</p>
    </div>
  );
}

export default App;
