// import { useState } from 'react';

import Home from './Home';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  // const [state, setState] = useState([]);

  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #6dbfb8; }'}</style>
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
