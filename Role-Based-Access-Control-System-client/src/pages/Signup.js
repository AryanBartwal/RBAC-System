import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Auth.css';

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(name, email, password);
      history.push('/blogs');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-submit">Create Account</button>
          
          <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            Already have an account? <Link to="/login" style={{ fontWeight: 600 }}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
