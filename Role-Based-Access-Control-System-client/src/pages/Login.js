import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Auth.css';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/blogs');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="auth-submit">Sign In</button>
          
          <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            Don't have an account? <Link to="/signup" style={{ fontWeight: 600 }}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
