import './App.css';
import { Home } from './Component/Home';
import { Personpage } from './Component/Personpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const url = "https://panorbit.in/api/users.json";
  const [user, setUser] = useState([]);

  const fetchdata = async () => {
    const data = await fetch(url);
    const parsedata = await data.json();
    console.log(parsedata);
    setUser(parsedata.users);
  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home url={url} />} />
          {user.map((ele,ind) => {
            return (
              <Route key={ind} path={`/${ele.name}`} element={<Personpage key={ele.id} element={ele} />} />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
