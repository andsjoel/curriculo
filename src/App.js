import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Principal from './Principal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Principal /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
