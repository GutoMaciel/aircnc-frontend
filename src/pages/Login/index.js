import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;
    
    localStorage.setItem('user', _id);

    history.push('/dashboard')
  }

  return (
    <>
      <p>Provide <strong>spots</strong> for developers and find <strong>talents</strong> to integrate your team</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email*</label>
        <input 
          id="email"
          type="email" 
          placeholder="Your Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Go</button>
      </form>
    </>
  )
}