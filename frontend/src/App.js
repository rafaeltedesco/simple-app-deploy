import { useState, useEffect, useCallback } from 'react';
const api = require('./services/api');

function App() {

  const [users, setUsers] = useState([])

  const getUsers = useCallback(async ()=> {
    setUsers(await api.getUsers())
  }, [])

  useEffect(()=> {
    getUsers();
  }, [getUsers])


  return (
    <div className="App" style={{display: 'flex', background: '#333', height: '100vh', flexDirection: 'column', alignItems: 'center'}}>
      <header>
        <h1 style={{color: '#fff'}}>Some Random APP</h1>
      </header>
      <ul>
      {users.map((user, idx) => (
          <div style={{background: '#a7a', display: 'flex', flexDirection: 'column', gap: 4, marginBottom: '10px', padding: '20px', width: '70vw', height: '100px', justifyContent: 'center', borderRadius: '10px'}} key={idx}>
          <li style={{listStyle: 'none', color: '#fff', fontSize: '1.5em'}}> { user.name}</li>
          <li style={{listStyle: 'none', color: '#ccc'}}> { user.email}</li>
        </div>
        ))
      }
      </ul>
      
    </div>
  );
}

export default App;
