import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValid = (pwd) => {
    const r = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return r.test(pwd);
  };

  let isVisible = name !== '' && email !== '' && password !== ''
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name | !email | !password) {
      setError('* Required all fileds');
    } else if (!isValid(password)) {
      setError('Please create Vaild password');
    } else {
      alert('Submitted Successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit" disabled={!isVisible}>
          Submit
        </button>

    </form>
  );
};

export default App;
