// src/UserList.js
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1  className='colorfull' style={{color:'red',fontFamily:'sans-serif'}}>User List</h1>
      <ul>
        {users.map(user => (
          <li style={{color:user?.name=='Leanne Graham'?'blue':'yellow'}} key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
