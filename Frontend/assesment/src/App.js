import './App.css';
import axios from 'axios'
import { useState , useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("oops");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function createAccounts(count) {
    for (let i = 0; i < count; i++) {
      const name = `User ${i+1}`;
      const email = `user${i+1}@example.com`;
      const password = `password${i+1}`;
  
      try {
        await axios.post('http://localhost:5000/api/users', {
          name: name,
          email: email,
          password: password
        });
  
        console.log(`User ${i+1} created successfully`);
      } catch (error) {
        console.error(`Error creating user ${i+1}: ${error.message}`);
      }
    }
  }

  function handleCreate(){
    createAccounts(3);
  }
  return (
    <div className="App">
      {users.map((user) => (
        <div key={user._id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>ID: {user._id}</p>
        </div>
      ))}
      <button onClick={getUsers}>Get Users</button>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default App;