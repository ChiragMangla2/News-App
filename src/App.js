import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>  {
  const apikey = process.env.REACT_APP_APIKEY;

    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} category='general' apiKey={apikey} country={'in'} />} />

            <Route exact path="/business" element={<News key="business" pageSize={6} category='business' apiKey={apikey} country={'in'} />} />

            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} category='entertainment' apiKey={apikey} country={'in'} />} />

            <Route exact path="/health" element={<News key="health" pageSize={6} category='health' apiKey={apikey} country={'in'} />} />

            <Route exact path="/science" element={<News key="science" pageSize={6} category='science' apiKey={apikey} country={'in'} />} />

            <Route exact path="/sports" element={<News key="sports" pageSize={6} category='sports' apiKey={apikey} country={'in'} />} />

            <Route exact path="/technology" element={<News key="technology" pageSize={6} category='technology' apiKey={apikey} country={'in'} />}/>

          </Routes>
        </Router>
      </div>
    )
}

export default App;