import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import api from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get('/users', {
        params: {
          email,
          password
        }
      });

      if (response.data.length > 0) {
        // Successfully logged in
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Login</button>
      <p style={styles.registerLink}>
        Not registered? <Link to="/register" style={styles.link}>Register here</Link>
      </p>
    </form>
  );
};

// Inline CSS styles
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase'
  },
  registerLink: {
    marginTop: '15px',
    fontSize: '0.9rem',
    color: '#888'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '5px'
  }
};

export default Login;
